const one = async (db, sql, args = []) => (await db.query(sql, args)).rows[0];
const fail = (status, message) => { const e = new Error(message); e.status = status; throw e; };
const text = (value, max) => typeof value === 'string' && value.length <= max ? value.trim() : '';
const idValid = value => typeof value === 'string' && /^[a-f0-9]{32}$/.test(value);
const event = (db, actor, id, action) => db.query('INSERT INTO salon_events(actor,subject,action,at) VALUES($1,$2,$3,$4)', [actor.id,id,action,Date.now()]);
const info = async (db,id) => one(db,`SELECT i.reservation,i.original_total,i.total,i.created,
  p.amount AS paid_amount,p.method,p.created AS paid_at FROM invoices i
  LEFT JOIN payments p ON p.reservation=i.reservation WHERE i.reservation=$1`,[id]);

export function createSettlement(db) {
  async function route(account, path, params, data) {
    const get = data === null;
    if (get && path === '/api/settlement/report') {
      if (account.role !== 'manager') fail(403,'Hanya manajemen dapat melihat laporan.');
      const from=params.get('from'), to=params.get('to');
      const valid = d => /^\d{4}-\d{2}-\d{2}$/.test(d||'') && !Number.isNaN(Date.parse(d+'T00:00:00Z')) && new Date(d+'T00:00:00Z').toISOString().slice(0,10)===d;
      if (!valid(from)||!valid(to)||to<from||Date.parse(to)-Date.parse(from)>89*86400000) fail(400,'Pilih rentang tanggal hingga 90 hari.');
      const counts=await one(db,`SELECT count(*) FILTER (WHERE r.status='CONFIRMED' AND v.channel IS DISTINCT FROM 'WALK_IN')::int AS reservations,
        count(v.reservation)::int AS visits, count(*) FILTER (WHERE v.channel='WALK_IN')::int AS walkins,
        count(*) FILTER (WHERE v.status='DONE')::int AS finished
        FROM reservations r LEFT JOIN visits v ON v.reservation=r.id WHERE r.day BETWEEN $1 AND $2`,[from,to]);
      const payments=await one(db,`SELECT count(*)::int AS count,COALESCE(sum(amount),0)::bigint AS total FROM payments
        WHERE created >= $1 AND created < $2`,[Date.parse(from+'T00:00:00+07:00'),Date.parse(to+'T00:00:00+07:00')+86400000]);
      const methods=(await db.query(`SELECT method,count(*)::int AS count,sum(amount)::bigint AS total FROM payments
        WHERE created >= $1 AND created < $2 GROUP BY method`,[Date.parse(from+'T00:00:00+07:00'),Date.parse(to+'T00:00:00+07:00')+86400000])).rows;
      const feedback=await one(db,`SELECT count(*)::int AS count,avg(rating)::float AS average FROM feedback
        WHERE created >= $1 AND created < $2`,[Date.parse(from+'T00:00:00+07:00'),Date.parse(to+'T00:00:00+07:00')+86400000]);
      const popular=(await db.query(`SELECT i.name,count(*)::int AS count FROM reservation_items i
        JOIN visits v ON v.reservation=i.reservation WHERE v.status='DONE' AND v.day BETWEEN $1 AND $2
        GROUP BY i.name ORDER BY count(*) DESC,i.name LIMIT 10`,[from,to])).rows;
      const comments=(await db.query(`SELECT f.reservation,f.rating,f.comment,f.created,
        (SELECT json_agg(json_build_object('note',n.note,'created',n.created) ORDER BY n.created) FROM feedback_followups n WHERE n.reservation=f.reservation) AS followups
        FROM feedback f WHERE f.created >= $1 AND f.created < $2 ORDER BY f.created DESC LIMIT 100`,
        [Date.parse(from+'T00:00:00+07:00'),Date.parse(to+'T00:00:00+07:00')+86400000])).rows;
      const start=Date.parse(from+'T00:00:00+07:00'), end=Date.parse(to+'T00:00:00+07:00')+86400000;
      const invoices=await one(db,`SELECT count(*)::int AS count,
        count(*) FILTER (WHERE p.reservation IS NULL)::int AS unpaid_count,
        COALESCE(sum(i.total) FILTER (WHERE p.reservation IS NULL),0)::bigint AS unpaid_total
        FROM invoices i LEFT JOIN payments p ON p.reservation=i.reservation
        WHERE i.created >= $1 AND i.created < $2`,[start,end]);
      const statuses=(await db.query(`SELECT status,count(*)::int AS count FROM reservations
        WHERE day BETWEEN $1 AND $2 GROUP BY status ORDER BY status`,[from,to])).rows;
      const ratings=(await db.query(`SELECT rating,count(*)::int AS count FROM feedback
        WHERE created >= $1 AND created < $2 GROUP BY rating ORDER BY rating`,[start,end])).rows;
      const visitDays=(await db.query(`SELECT day,count(*)::int AS count FROM visits
        WHERE day BETWEEN $1 AND $2 GROUP BY day`,[from,to])).rows;
      const paymentDays=(await db.query(`SELECT to_char(to_timestamp(created/1000.0) AT TIME ZONE 'Asia/Jakarta','YYYY-MM-DD') AS day,
        count(*)::int AS count,COALESCE(sum(amount),0)::bigint AS total FROM payments
        WHERE created >= $1 AND created < $2 GROUP BY 1`,[start,end])).rows;
      const visitsByDay=new Map(visitDays.map(row=>[row.day,row.count]));
      const paymentsByDay=new Map(paymentDays.map(row=>[row.day,row]));
      const series=[];
      for (let ms=Date.parse(from+'T00:00:00Z');ms<=Date.parse(to+'T00:00:00Z');ms+=86400000) {
        const day=new Date(ms).toISOString().slice(0,10), paid=paymentsByDay.get(day);
        series.push({day,visits:visitsByDay.get(day)||0,payments:paid?.count||0,paid_total:paid?.total||0});
      }
      return {counts,payments,methods,feedback,popular,comments,invoices,statuses,ratings,series};
    }
    const id=get?params.get('id'):data?.id;
    if (!idValid(id)) fail(400,'Kunjungan tidak valid.');
    if (get && path==='/api/settlement/detail') {
      if (!['staff','customer'].includes(account.role)) fail(403,'Akses ditolak.');
      const visit=await one(db,'SELECT r.account,v.status FROM reservations r JOIN visits v ON v.reservation=r.id WHERE r.id=$1',[id]);
      if (!visit || (account.role==='customer' && visit.account!==account.id)) fail(404,'Kunjungan tidak ditemukan.');
      const invoice=await info(db,id);
      if (invoice && account.role==='staff') invoice.adjustments=(await db.query(`SELECT a.old_total,a.new_total,a.reason,a.created,u.name AS actor
        FROM invoice_adjustments a JOIN accounts u ON u.id=a.actor WHERE a.reservation=$1 ORDER BY a.id`,[id])).rows;
      const feedback=account.role==='customer'?await one(db,'SELECT rating,comment FROM feedback WHERE reservation=$1 AND account=$2',[id,account.id]):null;
      return {invoice,feedback,visitStatus:visit.status};
    }
    if (account.role==='customer' && !get && path==='/api/settlement/feedback') {
      const comment=text(data.comment??'',1000);
      if (!Number.isInteger(data.rating)||data.rating<1||data.rating>5||(data.comment!==undefined && (typeof data.comment!=='string'||data.comment.length>1000))) fail(400,'Periksa rating dan komentar.');
      return db.transaction(async tx=>{
        const visit=await one(tx,'SELECT v.status FROM visits v JOIN reservations r ON r.id=v.reservation WHERE r.id=$1 AND r.account=$2',[id,account.id]);
        if (!visit) fail(404,'Kunjungan tidak ditemukan.');
        if (visit.status!=='DONE') fail(409,'Feedback tersedia setelah pelayanan selesai.');
        if (await one(tx,'SELECT reservation FROM feedback WHERE reservation=$1',[id])) fail(409,'Feedback sudah diberikan.');
        if (!(await one(tx,'SELECT reservation FROM payments WHERE reservation=$1',[id]))) fail(409,'Feedback tersedia setelah pembayaran dicatat lunas.');
        await tx.query('INSERT INTO feedback(reservation,account,rating,comment,created) VALUES($1,$2,$3,$4,$5)',[id,account.id,data.rating,comment,Date.now()]);
        await event(tx,account,id,'FEEDBACK'); return {saved:true};
      });
    }
    if (['staff','manager'].includes(account.role) && !get && path==='/api/settlement/followup') {
      const note=text(data.note,1000); if (!note) fail(400,'Isi tindak lanjut.');
      return db.transaction(async tx=>{
        if (!(await one(tx,'SELECT reservation FROM feedback WHERE reservation=$1',[id]))) fail(404,'Feedback tidak ditemukan.');
        await tx.query('INSERT INTO feedback_followups(reservation,note,actor,created) VALUES($1,$2,$3,$4)',[id,note,account.id,Date.now()]);
        await event(tx,account,id,'FEEDBACK_FOLLOWUP'); return {saved:true};
      });
    }
    if (account.role!=='staff' || get) fail(403,'Hanya resepsionis dapat memproses tagihan.');
    return db.transaction(async tx=>{
      const visit=await one(tx,'SELECT v.status,t.price FROM visits v JOIN booking_terms t ON t.reservation=v.reservation WHERE v.reservation=$1',[id]);
      if (!visit) fail(404,'Kunjungan tidak ditemukan.');
      if (visit.status!=='DONE') fail(409,'Tagihan tersedia setelah pelayanan selesai.');
      let invoice=await info(tx,id);
      if (path==='/api/settlement/create') {
        if (!invoice) {
          const items=await one(tx,'SELECT count(*)::int AS count,COALESCE(sum(price),0)::int AS total FROM reservation_items WHERE reservation=$1',[id]);
          if (!items.count || items.total!==visit.price) fail(409,'Rincian harga layanan tidak lengkap; periksa kunjungan.');
          await tx.query('INSERT INTO invoices(reservation,original_total,total,created,created_by) VALUES($1,$2,$2,$3,$4)',[id,visit.price,Date.now(),account.id]);
          await event(tx,account,id,'INVOICE_CREATED');
        }
      } else if (path==='/api/settlement/adjust') {
        if (!invoice || invoice.paid_at) fail(409,'Tagihan belum dibuat atau sudah lunas.');
        const reason=text(data.reason,500);
        if (!Number.isInteger(data.total)||data.total<0||data.total>1000000000||!reason) fail(400,'Isi jumlah dan alasan koreksi yang valid.');
        await tx.query('INSERT INTO invoice_adjustments(reservation,old_total,new_total,reason,actor,created) VALUES($1,$2,$3,$4,$5,$6)',[id,invoice.total,data.total,reason,account.id,Date.now()]);
        await tx.query('UPDATE invoices SET total=$1 WHERE reservation=$2',[data.total,id]); await event(tx,account,id,'INVOICE_ADJUSTED');
      } else if (path==='/api/settlement/pay') {
        if (!invoice) fail(409,'Buat tagihan terlebih dahulu.');
        if (!['CASH','TRANSFER','OTHER'].includes(data.method)||data.received!==true) fail(400,'Pilih metode dan pastikan pembayaran diterima.');
        if (invoice.paid_at) {
          if (invoice.method!==data.method) fail(409,'Pembayaran sudah dicatat dengan metode lain.');
          return invoice;
        }
        await tx.query('INSERT INTO payments(reservation,amount,method,actor,created) VALUES($1,$2,$3,$4,$5)',[id,invoice.total,data.method,account.id,Date.now()]);
        await event(tx,account,id,'PAYMENT_RECORDED');
      } else fail(404,'Halaman tidak ditemukan.');
      return info(tx,id);
    });
  }
  return {route};
}

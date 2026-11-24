import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  History,
  Scissors,
  Search,
  Sparkles,
  UserRound,
} from 'lucide-react';
import {
  addDays,
  api,
  ApiError,
  date,
  errorMessage,
  formatShortDayId,
  money,
  PAYMENT_METHOD_LABELS,
  ROLE_LABELS,
  time,
  type Account,
  type Catalog,
  type Reservation,
  type Slot,
} from './api';
import { EmptyState, go, MetricCard, Notice, PageHeader, StatusBadge } from './components/ui';

type Queue = {
  ticket: number | null;
  status: 'WAITING' | 'ACTIVE' | 'DONE' | null;
  eta: number | null;
  estimate: number | null;
};

type Invoice = {
  total: number;
  paid_at: number | null;
  method: string | null;
};

type Settlement = {
  invoice: Invoice | null;
  feedback: { rating: number; comment: string } | null;
};

const jakartaHourFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  hourCycle: 'h23',
});

function getSlotPeriod(startMs: number): 'Pagi' | 'Siang' | 'Sore' {
  const hour = Number(jakartaHourFmt.format(startMs));
  if (hour < 12) return 'Pagi';
  if (hour < 16) return 'Siang';
  return 'Sore';
}

function ReservationProgress({ row }: { row: Reservation }) {
  const step =
    row.visit_status === 'DONE'
      ? 4
      : row.visit_status === 'WAITING' || row.visit_status === 'ACTIVE'
        ? 3
        : row.status === 'CONFIRMED'
          ? 2
          : 1;
  const labels = ['Diajukan', 'Terkonfirmasi', 'Check-in', 'Selesai'];
  return (
    <div className="m-mini-progress" aria-label={`Tahap reservasi: ${labels[step - 1]}`}>
      {labels.map((label, idx) => {
        const done = idx + 1 <= step;
        return (
          <div className={`m-mini-step ${done ? 'is-done' : ''}`} key={label}>
            <span className="m-mini-dot" aria-hidden="true">
              {done && <Check size={10} strokeWidth={3} />}
            </span>
            <small>{label}</small>
          </div>
        );
      })}
    </div>
  );
}

function ReservationCard({
  row,
  catalog,
  showProgress = false,
}: {
  row: Reservation;
  catalog: Catalog;
  showProgress?: boolean;
}) {
  const capsterName = catalog.capsters.find((c) => c.id === row.capster)?.name || row.capster;
  const effectiveStatus = row.visit_status || row.status;
  return (
    <article className="m-reservation-card">
      <div className="m-card-date">
        <span>{date.format(row.start)}</span>
        <strong>
          {time.format(row.start)} <small>WIB</small>
        </strong>
      </div>
      <div className="m-card-body">
        <div className="m-card-badges">
          <StatusBadge status={effectiveStatus} />
          {row.code && <span className="m-code-chip">Kode {row.code}</span>}
        </div>
        <h3>{row.items.map((i) => i.name).join(' + ')}</h3>
        <p>
          {capsterName} · {row.booked_duration} menit · {money.format(row.booked_price)}
        </p>
        {showProgress && <ReservationProgress row={row} />}
      </div>
      <a
        className="m-round-link"
        aria-label={`Lihat detail reservasi ${row.items.map((i) => i.name).join(', ')}`}
        href={'/reservasi?id=' + encodeURIComponent(row.id)}
      >
        <ArrowRight size={18} />
      </a>
    </article>
  );
}

export function CustomerHome({
  account,
  catalog,
}: {
  account: Account;
  catalog: Catalog;
}) {
  const [rows, setRows] = useState<Reservation[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api<{ reservations: Reservation[] }>('/reservations')
      .then((r) => setRows(r.reservations))
      .catch((e) => setError(errorMessage(e)));
  }, []);

  const upcoming = rows
    ? rows.filter((r) => r.start >= Date.now() && r.visit_status !== 'DONE').sort((a, b) => a.start - b.start)
    : [];
  const next = upcoming[0];
  const pendingCount = rows ? rows.filter((r) => r.status === 'REQUESTED').length : 0;
  const doneCount = rows ? rows.filter((r) => r.visit_status === 'DONE').length : 0;

  return (
    <>
      <PageHeader
        eyebrow="SHAGA SALON · AKUN PELANGGAN"
        title={
          <>
            Halo, {account.name.split(' ')[0]}.
            <br />
            <em>Senang melihatmu lagi.</em>
          </>
        }
        description={`Masuk sebagai ${account.email} · Atur jadwal perawatan dan pantau status kunjunganmu.`}
        actions={
          <a className="m-primary" href="/reservasi">
            Buat reservasi <ArrowRight size={17} />
          </a>
        }
      />

      <div className="m-editorial-strip">
        <div>
          <span className="m-eyebrow">WAKTU UNTUK DIRIMU</span>
          <p>Perawatan yang baik dimulai dari waktu yang kamu sisihkan untuk diri sendiri.</p>
        </div>
        <div className="m-strip-badge" aria-hidden="true">
          <Scissors size={28} strokeWidth={1.35} />
        </div>
      </div>

      {rows && (
        <div className="m-metrics-grid m-metrics-3" aria-label="Ringkasan akun">
          <MetricCard
            label="Jadwal mendatang"
            value={upcoming.length}
            hint={next ? `Terdekat ${date.format(next.start)}` : 'Belum ada jadwal aktif'}
            tone="accent"
            icon={<CalendarDays size={17} />}
          />
          <MetricCard
            label="Menunggu konfirmasi"
            value={pendingCount}
            hint={pendingCount > 0 ? 'Belum mengamankan slot' : 'Semua permintaan sudah diproses'}
            tone={pendingCount > 0 ? 'warning' : 'default'}
            icon={<Clock3 size={17} />}
          />
          <MetricCard
            label="Kunjungan selesai"
            value={doneCount}
            hint="Riwayat layanan tercatat"
            tone="success"
            icon={<CheckCircle2 size={17} />}
          />
        </div>
      )}

      <div className="m-section-heading">
        <div>
          <span className="m-eyebrow">RENCANA KUNJUNGAN</span>
          <h2>Reservasi terdekat</h2>
        </div>
        <a href="/akun" className="m-text-link">
          Lihat semua riwayat <ArrowRight size={16} />
        </a>
      </div>

      <Notice text={error} />
      {!rows && !error && (
        <div className="m-loading-box" role="status">
          Memuat data reservasi…
        </div>
      )}
      {rows &&
        (next ? (
          <ReservationCard row={next} catalog={catalog} showProgress />
        ) : (
          <EmptyState
            icon={<CalendarDays size={26} strokeWidth={1.5} />}
            title="Belum ada reservasi mendatang"
            description="Temukan layanan dan pilih jadwal yang nyaman untuk kunjunganmu berikutnya."
            action={
              <a className="m-secondary" href="/reservasi">
                Jelajahi layanan <ArrowRight size={15} />
              </a>
            }
          />
        ))}

      <div className="m-quick-grid">
        <a href="/reservasi" className="m-quick-card">
          <div className="m-quick-icon">
            <CalendarDays size={20} />
          </div>
          <div>
            <strong>Buat reservasi baru</strong>
            <span>Pilih layanan, capster, dan slot WIB tersedia</span>
          </div>
          <ArrowRight size={17} />
        </a>
        <a href="/akun" className="m-quick-card">
          <div className="m-quick-icon">
            <History size={20} />
          </div>
          <div>
            <strong>Riwayat reservasi</strong>
            <span>Pantau status konfirmasi, antrean, dan kode pemesanan</span>
          </div>
          <ArrowRight size={17} />
        </a>
        <a href="/profil" className="m-quick-card">
          <div className="m-quick-icon">
            <UserRound size={20} />
          </div>
          <div>
            <strong>Profil saya</strong>
            <span>Kelola nama dan nomor telepon kontak kunjungan</span>
          </div>
          <ArrowRight size={17} />
        </a>
      </div>
    </>
  );
}

export function ReservationHistory({
  account,
  catalog,
}: {
  account: Account;
  catalog: Catalog;
}) {
  const [rows, setRows] = useState<Reservation[] | null>(null);
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'ALL' | 'REQUESTED' | 'CONFIRMED' | 'DONE'>('ALL');

  useEffect(() => {
    api<{ reservations: Reservation[] }>('/reservations')
      .then((r) => setRows(r.reservations))
      .catch((e) => setError(errorMessage(e)));
  }, []);

  const filtered = rows
    ? rows.filter((r) => {
        if (tab === 'REQUESTED') return r.status === 'REQUESTED';
        if (tab === 'CONFIRMED') return r.status === 'CONFIRMED' && r.visit_status !== 'DONE';
        if (tab === 'DONE') return r.visit_status === 'DONE';
        return true;
      })
    : [];

  return (
    <>
      <PageHeader
        eyebrow="AKUN / RIWAYAT RESERVASI"
        title={
          <>
            Reservasi <em>saya.</em>
          </>
        }
        description={`Semua permintaan dan jadwal kunjungan milik ${account.name}.`}
        actions={
          <a className="m-primary" href="/reservasi">
            Buat reservasi <ArrowRight size={17} />
          </a>
        }
      />

      {rows && rows.length > 0 && (
        <div className="m-filter-pills" role="tablist" aria-label="Filter status reservasi">
          {(
            [
              ['ALL', `Semua (${rows.length})`],
              ['REQUESTED', `Menunggu konfirmasi (${rows.filter((r) => r.status === 'REQUESTED').length})`],
              [
                'CONFIRMED',
                `Terkonfirmasi (${rows.filter((r) => r.status === 'CONFIRMED' && r.visit_status !== 'DONE').length})`,
              ],
              ['DONE', `Selesai (${rows.filter((r) => r.visit_status === 'DONE').length})`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className={`m-chip ${tab === key ? 'is-active' : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <Notice text={error} />
      {!rows && !error && (
        <div className="m-loading-box" role="status">
          Memuat riwayat reservasi…
        </div>
      )}

      {rows &&
        (filtered.length ? (
          <div className="m-stack-sm">
            {filtered.map((r) => (
              <ReservationCard key={r.id} row={r} catalog={catalog} showProgress />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<CalendarDays size={26} strokeWidth={1.5} />}
            title={rows.length ? 'Tidak ada reservasi pada filter ini' : 'Belum ada reservasi'}
            description={
              rows.length
                ? 'Coba pilih kategori status lain untuk melihat reservasi kamu.'
                : 'Temukan layanan dan pilih waktu yang cocok untuk kunjungan pertamamu.'
            }
            action={
              rows.length ? (
                <button type="button" className="m-secondary" onClick={() => setTab('ALL')}>
                  Tampilkan semua
                </button>
              ) : (
                <a className="m-secondary" href="/reservasi">
                  Jelajahi layanan <ArrowRight size={15} />
                </a>
              )
            }
          />
        ))}
    </>
  );
}

export function BookingFlow({
  account,
  catalog,
  query,
}: {
  account: Account;
  catalog: Catalog;
  query: URLSearchParams;
}) {
  const activeServices = catalog.services.filter((s) => s.active !== false);
  const requestedIds = query.getAll('layanan');
  const initialSelected = requestedIds.filter((id) => activeServices.some((s) => s.id === id));
  const initialDayParam = query.get('tanggal') || '';
  const initialDay =
    /^\d{4}-\d{2}-\d{2}$/.test(initialDayParam) && initialDayParam >= catalog.today
      ? initialDayParam
      : catalog.today;

  const [selected, setSelected] = useState<string[]>(initialSelected);
  const [durationFilter, setDurationFilter] = useState<'ALL' | 'SHORT' | 'LONG'>('ALL');
  const [day, setDay] = useState(initialDay);
  const [capster, setCapster] = useState(query.get('capster') || '');
  const [start, setStart] = useState(query.get('jam') || '');
  const [name, setName] = useState(account.role === 'staff' ? '' : account.name);
  const [phone, setPhone] = useState(account.role === 'staff' ? '' : account.phone);
  const [term, setTerm] = useState('');
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotStatus, setSlotStatus] = useState('Pilih layanan, tanggal, dan capster untuk melihat jam tersedia.');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(
    requestedIds.some((id) => !initialSelected.includes(id))
      ? 'Sebagian layanan dari pilihan sebelumnya sudah tidak tersedia.'
      : ''
  );

  useEffect(() => {
    try {
      const key = 'shaga-draft-contact-' + account.id;
      const saved = JSON.parse(sessionStorage.getItem(key) || 'null');
      if (saved && typeof saved.name === 'string' && typeof saved.phone === 'string') {
        setName(saved.name);
        setPhone(saved.phone);
        sessionStorage.removeItem(key);
      }
    } catch {
      // ignore storage errors
    }
  }, [account.id]);

  const items = activeServices.filter((s) => selected.includes(s.id));
  const eligible = catalog.capsters.filter(
    (c) => c.active !== false && items.length > 0 && items.every((s) => c.skills.includes(s.id))
  );

  useEffect(() => {
    if (capster && !eligible.some((c) => c.id === capster)) {
      setCapster('');
      setStart('');
    } else if (!capster && eligible.length === 1) {
      setCapster(eligible[0].id);
    }
  }, [selected.join(','), capster, eligible.length]);

  const fetchSlots = (preferred = start) => {
    if (!items.length || !day || !capster) {
      setSlots([]);
      setLoadingSlots(false);
      setSlotStatus(
        items.length && !eligible.length
          ? 'Belum ada satu capster yang menangani semua layanan pilihan. Ubah kombinasi layanan.'
          : 'Pilih layanan, tanggal, dan capster untuk melihat jam tersedia.'
      );
      return () => {};
    }
    let active = true;
    const params = new URLSearchParams({ day, capster });
    selected.forEach((id) => params.append('services', id));
    setLoadingSlots(true);
    setSlots([]);
    setSlotStatus('Mencari jadwal yang tersedia…');

    api<{ slots: Slot[] }>('/slots?' + params)
      .then((r) => {
        if (!active) return;
        setSlots(r.slots);
        const stillValid = r.slots.some((s) => String(s.start) === preferred);
        setStart(stillValid ? preferred : '');
        if (preferred && !stillValid) {
          setSlotStatus('Jam sebelumnya sudah tidak tersedia. Silakan pilih jam lain.');
        } else {
          setSlotStatus(
            r.slots.length
              ? `Tersedia ${r.slots.length} pilihan waktu. Pilih satu jam di bawah.`
              : 'Belum ada slot yang cukup untuk durasi layanan dan jeda salon. Coba tanggal atau capster lain.'
          );
        }
      })
      .catch((e) => {
        if (!active) return;
        if (e instanceof ApiError && e.status === 401) {
          const draft = new URLSearchParams({ tanggal: day, capster, jam: start });
          selected.forEach((id) => draft.append('layanan', id));
          go('/login?' + draft.toString());
          return;
        }
        setSlotStatus(errorMessage(e));
      })
      .finally(() => {
        if (active) setLoadingSlots(false);
      });

    return () => {
      active = false;
    };
  };

  useEffect(() => fetchSlots(start), [selected.join(','), day, capster]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const row = await api<Reservation>('/reservations', {
        services: items.map((s) => s.id),
        day,
        capster,
        start: Number(start),
        name,
        phone,
      });
      go('/reservasi?id=' + encodeURIComponent(row.id));
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) {
        try {
          sessionStorage.setItem('shaga-draft-contact-' + account.id, JSON.stringify({ name, phone }));
        } catch {
          // ignore
        }
        const draft = new URLSearchParams({ tanggal: day, capster, jam: start });
        selected.forEach((id) => draft.append('layanan', id));
        go('/login?' + draft.toString());
        return;
      }
      setError(errorMessage(e));
      if (e instanceof ApiError && e.status === 409) {
        fetchSlots('');
      }
    } finally {
      setBusy(false);
    }
  }

  const totalDuration = items.reduce((n, s) => n + s.duration, 0);
  const totalPrice = items.reduce((n, s) => n + s.price, 0);
  const filteredServices = activeServices.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(term.trim().toLowerCase());
    const matchesDur =
      durationFilter === 'ALL' ||
      (durationFilter === 'SHORT' && s.duration <= 45) ||
      (durationFilter === 'LONG' && s.duration > 45);
    return matchesSearch && matchesDur;
  });

  const quickDates = [
    { label: 'Hari ini', day: catalog.today },
    { label: `Besok (${formatShortDayId(addDays(catalog.today, 1))})`, day: addDays(catalog.today, 1) },
    { label: `Lusa (${formatShortDayId(addDays(catalog.today, 2))})`, day: addDays(catalog.today, 2) },
  ];

  const groupedSlots = (['Pagi', 'Siang', 'Sore'] as const)
    .map((period) => ({
      period,
      items: slots.filter((s) => getSlotPeriod(s.start) === period),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="RESERVASI · LANGKAH 1 DARI 3"
        title={
          account.role === 'staff' ? (
            <>
              Bantu reservasi <em>pelanggan.</em>
            </>
          ) : (
            <>
              Waktu untuk <em>dirimu.</em>
            </>
          )
        }
        description="Pilih layanan, tanggal, capster, dan jam kunjungan. Jadwal baru diamankan setelah tahap konfirmasi."
        actions={<span className="m-heading-note">SHAGA SALON · SURABAYA · WIB</span>}
      />

      <div className="m-stepper" aria-label="Tahapan reservasi">
        <div className="m-stepper-item is-current">
          <span>1</span>
          <strong>Pilih layanan &amp; jadwal</strong>
        </div>
        <div className="m-stepper-line" aria-hidden="true" />
        <div className="m-stepper-item">
          <span>2</span>
          <strong>Tinjau &amp; konfirmasi</strong>
        </div>
        <div className="m-stepper-line" aria-hidden="true" />
        <div className="m-stepper-item">
          <span>3</span>
          <strong>Kode reservasi terbit</strong>
        </div>
      </div>

      <form className="m-booking-layout" onSubmit={submit}>
        <div className="m-booking-content">
          <section className="m-booking-section">
            <div className="m-section-title">
              <span>01</span>
              <div>
                <h2>Pilih layanan</h2>
                <p>Boleh memilih lebih dari satu layanan. Harga dan durasi dijumlahkan otomatis.</p>
              </div>
            </div>

            <div className="m-service-toolbar">
              <label className="m-search">
                <span className="m-sr">Cari layanan</span>
                <div className="m-input-icon">
                  <Search size={16} aria-hidden="true" />
                  <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    type="search"
                    placeholder="Cari nama layanan, mis. potong rambut"
                  />
                </div>
              </label>

              <div className="m-filter-pills m-tight-pills" role="group" aria-label="Filter durasi layanan">
                {(
                  [
                    ['ALL', `Semua (${activeServices.length})`],
                    ['SHORT', '≤ 45 menit'],
                    ['LONG', '> 45 menit'],
                  ] as const
                ).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={durationFilter === k}
                    className={`m-chip ${durationFilter === k ? 'is-active' : ''}`}
                    onClick={() => setDurationFilter(k)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <fieldset className="m-services">
              <legend className="m-sr">Daftar layanan aktif</legend>
              <div className="m-services-grid">
                {filteredServices.map((s) => {
                  const checked = selected.includes(s.id);
                  return (
                    <label className={`m-service ${checked ? 'is-selected' : ''}`} key={s.id}>
                      <input
                        className="m-sr"
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          setSelected((old) =>
                            old.includes(s.id) ? old.filter((id) => id !== s.id) : [...old, s.id]
                          )
                        }
                      />
                      <span className={`m-service-check ${checked ? 'is-checked' : ''}`} aria-hidden="true">
                        {checked && <Check size={13} strokeWidth={3} />}
                      </span>
                      <span>
                        <strong>{s.name}</strong>
                        <small>{s.duration} menit</small>
                      </span>
                      <b>{money.format(s.price)}</b>
                    </label>
                  );
                })}
              </div>
              {!filteredServices.length && (
                <p className="m-muted" role="status">
                  Tidak ada layanan yang cocok dengan filter atau kata kunci tersebut.
                </p>
              )}
            </fieldset>
          </section>

          <section className="m-booking-section">
            <div className="m-section-title">
              <span>02</span>
              <div>
                <h2>Atur jadwal &amp; capster</h2>
                <p>Semua jam ditampilkan dalam Waktu Indonesia Barat (WIB).</p>
              </div>
            </div>

            <div className="m-date-quick-wrap">
              <div className="m-filter-pills m-tight-pills" role="group" aria-label="Pilih tanggal cepat">
                {quickDates.map((qd) => (
                  <button
                    key={qd.day}
                    type="button"
                    aria-pressed={day === qd.day}
                    className={`m-chip ${day === qd.day ? 'is-active' : ''}`}
                    onClick={() => {
                      setDay(qd.day);
                      setStart('');
                    }}
                  >
                    {qd.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="m-grid-two">
              <label>
                Atau pilih tanggal kunjungan
                <input
                  type="date"
                  value={day}
                  min={catalog.today}
                  onChange={(e) => {
                    setDay(e.target.value);
                    setStart('');
                  }}
                  required
                />
              </label>

              <div>
                <span className="m-field-label">Pilih capster kompeten</span>
                {!items.length ? (
                  <p className="m-field-hint">Pilih minimal satu layanan terlebih dahulu.</p>
                ) : !eligible.length ? (
                  <p className="m-field-hint m-text-warn">
                    Belum ada satu capster yang menguasai semua layanan yang dipilih.
                  </p>
                ) : (
                  <div className="m-capster-pills" role="group" aria-label="Pilih capster">
                    {eligible.map((c) => {
                      const active = capster === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          aria-pressed={active}
                          className={`m-choice-pill ${active ? 'is-selected' : ''}`}
                          onClick={() => {
                            setCapster(c.id);
                            setStart('');
                          }}
                        >
                          <span className="m-capster-avatar" aria-hidden="true">
                            {c.name.trim().charAt(0).toUpperCase()}
                          </span>
                          <span className="m-capster-meta">
                            <strong>{c.name}</strong>
                            <small>{c.skills.length} keahlian</small>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="m-slots-block">
              <span className="m-field-label">Jam tersedia (WIB)</span>
              <p className="m-slot-note" role="status">
                <Clock3 size={15} aria-hidden="true" />
                <span>{slotStatus}</span>
              </p>
              {loadingSlots && <div className="m-loading-box">Memeriksa slot yang masih tersedia…</div>}
              {!loadingSlots && groupedSlots.length > 0 && (
                <div className="m-slot-groups">
                  {groupedSlots.map((group) => (
                    <div className="m-slot-group" key={group.period}>
                      <span className="m-slot-group-label">{group.period}</span>
                      <div className="m-slots-grid" role="group" aria-label={`Pilih jam ${group.period}`}>
                        {group.items.map((s) => {
                          const active = String(s.start) === String(start);
                          return (
                            <button
                              key={s.start}
                              type="button"
                              aria-pressed={active}
                              className={`m-slot-btn ${active ? 'is-selected' : ''}`}
                              onClick={() => setStart(String(s.start))}
                            >
                              {time.format(s.start)} WIB
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="m-booking-section">
            <div className="m-section-title">
              <span>03</span>
              <div>
                <h2>Data pelanggan</h2>
                <p>
                  {account.role === 'staff'
                    ? 'Isi nama dan kontak pelanggan yang akan berkunjung.'
                    : 'Digunakan untuk menghubungi dan menyambutmu saat kunjungan.'}
                </p>
              </div>
            </div>
            <div className="m-grid-two">
              <label>
                Nama pelanggan
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lengkap pelanggan"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <label>
                Nomor telepon
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  required
                  maxLength={22}
                />
              </label>
            </div>
          </section>
        </div>

        <aside className="m-summary">
          <span className="m-eyebrow">RINGKASAN PILIHAN</span>
          <h2>Rencana perawatan</h2>
          <p>Periksa detail sebelum melanjutkan ke halaman peninjauan.</p>

          <div className="m-summary-list">
            {items.length ? (
              items.map((s) => (
                <div key={s.id}>
                  <span>
                    {s.name}
                    <small>{s.duration} menit</small>
                  </span>
                  <strong>{money.format(s.price)}</strong>
                </div>
              ))
            ) : (
              <p className="m-muted">Belum ada layanan yang dipilih.</p>
            )}
          </div>

          {items.length > 0 && (
            <div className="m-summary-meta">
              <div>
                <span>Durasi layanan</span>
                <strong>{totalDuration} menit</strong>
              </div>
              <div>
                <span>Jeda salon (buffer)</span>
                <strong>{catalog.buffer} menit</strong>
              </div>
              {capster && (
                <div>
                  <span>Capster</span>
                  <strong>{eligible.find((c) => c.id === capster)?.name || capster}</strong>
                </div>
              )}
              {start && (
                <div>
                  <span>Jadwal dipilih</span>
                  <strong>
                    {formatShortDayId(day)} · {time.format(Number(start))} WIB
                  </strong>
                </div>
              )}
            </div>
          )}

          <div className="m-total">
            <span>Total estimasi</span>
            <strong>{money.format(totalPrice)}</strong>
          </div>

          <p className="m-summary-note">
            Pengajuan awal belum mengamankan jadwal. Slot baru dikunci setelah kamu menekan{' '}
            <strong>Konfirmasi reservasi</strong> di halaman peninjauan.
          </p>

          <Notice text={error} />

          <button className="m-primary" disabled={busy || !selected.length || !capster || !start}>
            {busy ? 'Menyimpan permintaan…' : 'Tinjau permintaan'} <ArrowRight size={17} />
          </button>
        </aside>
      </form>
    </>
  );
}

export function ProfileView({
  account,
  onAccountUpdate,
}: {
  account: Account;
  onAccountUpdate: (updated: Account) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(account.name);
  const [phone, setPhone] = useState(account.phone);
  const [notice, setNotice] = useState('');
  const [noticeTone, setNoticeTone] = useState<'error' | 'success'>('success');
  const [busy, setBusy] = useState(false);

  async function save(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setNotice('');
    try {
      const result = await api<{ account: Account }>('/profile', { name, phone });
      onAccountUpdate(result.account);
      setName(result.account.name);
      setPhone(result.account.phone);
      setEditing(false);
      setNoticeTone('success');
      setNotice('Profil berhasil diperbarui.');
    } catch (error) {
      setNoticeTone('error');
      setNotice(errorMessage(error));
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="AKUN / PROFIL SAYA"
        title={
          <>
            Profil <em>saya.</em>
          </>
        }
        description="Kelola informasi kontak dan lihat peran akunmu di Shaga Salon."
      />
      <section className="m-detail-card">
        <Notice text={notice} tone={noticeTone} />
        {editing ? (
          <form className="m-form" onSubmit={save}>
            <label>
              Nama lengkap
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={2}
                maxLength={100}
                required
              />
            </label>
            <label>
              Nomor telepon
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={22}
                required
              />
            </label>
            <div className="m-actions">
              <button className="m-primary" disabled={busy}>
                {busy ? 'Menyimpan…' : 'Simpan perubahan'} <ArrowRight size={17} />
              </button>
              <button
                className="m-secondary"
                type="button"
                onClick={() => {
                  setName(account.name);
                  setPhone(account.phone);
                  setEditing(false);
                  setNotice('');
                }}
              >
                Batal
              </button>
            </div>
          </form>
        ) : (
          <>
            <dl className="m-detail-list">
              <div>
                <dt>Nama lengkap</dt>
                <dd>{account.name}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{account.email}</dd>
              </div>
              <div>
                <dt>Nomor telepon</dt>
                <dd>{account.phone || 'Belum diisi'}</dd>
              </div>
              <div>
                <dt>Peran akun</dt>
                <dd>
                  <span className="m-pill is-neutral">{ROLE_LABELS[account.role]}</span>
                </dd>
              </div>
            </dl>
            <div className="m-actions">
              <button type="button" className="m-secondary" onClick={() => setEditing(true)}>
                Edit profil
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

function VisitSection({ id, row }: { id: string; row: Reservation }) {
  const [queue, setQueue] = useState<Queue | null>(null);
  const [updated, setUpdated] = useState<number | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [settlement, setSettlement] = useState<Settlement | null>(null);
  const [settlementUnavailable, setSettlementUnavailable] = useState(false);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [messageTone, setMessageTone] = useState<'error' | 'success'>('success');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    let live = true;
    let pending = false;

    async function load(initial = false) {
      if (pending || (!initial && document.hidden)) return;
      pending = true;
      try {
        const q = await api<Queue>('/queue?' + new URLSearchParams({ id }));
        if (!live) return;
        setQueue(q);
        setUpdated(Date.now());
        setUnavailable(false);
        if (q.status === 'DONE') {
          try {
            const result = await api<Settlement>('/settlement/detail?' + new URLSearchParams({ id }));
            if (live) {
              setSettlement(result);
              setSettlementUnavailable(false);
            }
          } catch {
            if (live) setSettlementUnavailable(true);
          }
        }
      } catch {
        if (live) setUnavailable(true);
      } finally {
        pending = false;
      }
    }

    void load(true);
    const timer = setInterval(() => void load(), 20000);
    const visible = () => {
      if (!document.hidden) void load();
    };
    document.addEventListener('visibilitychange', visible);
    return () => {
      live = false;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', visible);
    };
  }, [id]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setMessage('');
    try {
      await api('/settlement/feedback', { id, rating: Number(rating), comment });
      setSettlement((previous) =>
        previous ? { ...previous, feedback: { rating: Number(rating), comment } } : previous
      );
      setMessageTone('success');
      setMessage('Terima kasih, feedback kamu sudah tercatat.');
    } catch (error) {
      setMessageTone('error');
      setMessage(errorMessage(error));
    } finally {
      setSending(false);
    }
  }

  const effectiveStatus = queue?.status ?? row.visit_status ?? null;
  const effectiveTicket = queue?.ticket ?? row.ticket ?? null;
  const statusText = effectiveStatus
    ? { WAITING: 'Menunggu layanan', ACTIVE: 'Sedang dilayani', DONE: 'Selesai' }[effectiveStatus]
    : 'Belum check-in';

  return (
    <section className="m-detail-card m-visit">
      <div className="m-section-title">
        <span>02</span>
        <div>
          <h2>Kunjungan dan antrean</h2>
          <p>Estimasi dapat berubah mengikuti kondisi pelayanan aktual.</p>
        </div>
      </div>

      <div className="m-queue-line">
        <Clock3 size={20} aria-hidden="true" />
        <div>
          <strong>{queue || unavailable ? statusText : 'Memuat status kunjungan…'}</strong>
          {effectiveTicket && <p>Nomor antrean #{effectiveTicket}</p>}
          {queue?.eta && <p>Perkiraan mulai {time.format(queue.eta)} WIB</p>}
          {queue?.estimate && <p>Perkiraan selesai {time.format(queue.estimate)} WIB</p>}
        </div>
      </div>

      <p className="m-updated" role="status">
        {updated
          ? `Terakhir diperbarui ${time.format(updated)} WIB.`
          : unavailable
            ? 'Status kunjungan tersinkron dengan data reservasi.'
            : 'Menunggu pembaruan…'}
      </p>

      {effectiveStatus === 'DONE' && !settlementUnavailable && (
        <>
          <div className="m-invoice">
            <span>Tagihan kunjungan</span>
            <strong>{settlement?.invoice ? money.format(settlement.invoice.total) : money.format(row.booked_price)}</strong>
            <small>
              {settlement?.invoice
                ? settlement.invoice.paid_at
                  ? `Lunas (${PAYMENT_METHOD_LABELS[settlement.invoice.method || ''] || settlement.invoice.method}) · ${date.format(settlement.invoice.paid_at)} ${time.format(settlement.invoice.paid_at)} WIB`
                  : 'Belum lunas'
                : 'Tercatat pada sistem Shaga Salon.'}
            </small>
            {settlement?.invoice?.paid_at && (
              <small>Pembayaran dicatat setelah diverifikasi petugas salon.</small>
            )}
          </div>

          {settlement?.feedback ? (
            <div className="m-confirmed m-feedback-done">
              <Sparkles size={17} aria-hidden="true" />
              <span>
                Terima kasih, feedback kamu sudah tercatat ({settlement.feedback.rating}/5).
              </span>
            </div>
          ) : settlement && !settlement.invoice?.paid_at ? (
            <p className="m-muted" role="status">
              Formulir feedback sukarela tersedia setelah petugas mencatat pembayaran lunas.
            </p>
          ) : (
            settlement && (
              <form className="m-form" onSubmit={submit}>
                <h3>Feedback sukarela</h3>
                <p className="m-muted">Kamu boleh melewati bagian ini.</p>
                <label>
                  Rating pelayanan
                  <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                    <option value="">Pilih rating (1–5)</option>
                    {[5, 4, 3, 2, 1].map((n) => (
                      <option key={n} value={n}>
                        {n} / 5
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Komentar (opsional)
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Bagikan pengalaman kunjunganmu…"
                    maxLength={1000}
                  />
                </label>
                <Notice text={message} tone={messageTone} />
                <button className="m-primary" disabled={sending}>
                  {sending ? 'Mengirim…' : 'Kirim feedback'} <ArrowRight size={17} />
                </button>
              </form>
            )
          )}
        </>
      )}
    </section>
  );
}

export function ReservationDetail({
  id,
  catalog,
  account,
}: {
  id: string;
  catalog: Catalog;
  account: Account;
}) {
  const [row, setRow] = useState<Reservation | null>(null);
  const [notice, setNotice] = useState('');
  const [busy, setBusy] = useState(false);
  const [conflict, setConflict] = useState(false);

  useEffect(() => {
    api<Reservation>('/reservations/' + encodeURIComponent(id))
      .then(setRow)
      .catch((error) => setNotice(errorMessage(error)));
  }, [id]);

  async function confirm() {
    if (!row) return;
    setBusy(true);
    setNotice('');
    try {
      setRow(await api<Reservation>('/reservations/' + row.id + '/confirm', { quote: row.quote }));
    } catch (error) {
      setNotice(errorMessage(error));
      if (error instanceof ApiError && error.status === 409) setConflict(true);
    } finally {
      setBusy(false);
    }
  }

  if (!row) {
    return notice ? (
      <div className="m-detail-card">
        <Notice text={notice} />
        <a className="m-secondary" href={account.role === 'staff' ? '/resepsionis' : '/akun'}>
          Kembali
        </a>
      </div>
    ) : (
      <div className="m-loading-box" role="status">
        Memuat detail reservasi…
      </div>
    );
  }

  const confirmed = row.status === 'CONFIRMED';
  const capsterName = catalog.capsters.find((c) => c.id === row.capster)?.name || row.capster;
  const choices = new URLSearchParams({
    tanggal: row.day,
    capster: row.capster,
    jam: String(row.start),
  });
  row.items.forEach((item) => choices.append('layanan', item.id));
  const bufferMins = Math.max(0, (row.end - row.start) / 60000 - row.booked_duration);

  return (
    <>
      <a className="m-back" href={account.role === 'staff' ? '/resepsionis' : '/akun'}>
        <ArrowLeft size={16} />{' '}
        {account.role === 'staff' ? 'Kembali ke meja resepsionis' : 'Kembali ke riwayat reservasi'}
      </a>

      <PageHeader
        eyebrow={`RESERVASI · ${confirmed ? 'LANGKAH 3 DARI 3 · TERKONFIRMASI' : 'LANGKAH 2 DARI 3 · TINJAU PILIHAN'}`}
        title={
          confirmed ? (
            <>
              Jadwalmu <em>siap.</em>
            </>
          ) : (
            <>
              Satu langkah <em>lagi.</em>
            </>
          )
        }
        description={
          confirmed
            ? 'Simpan kode reservasi dan tunjukkan kepada resepsionis saat datang.'
            : row.needsReview
              ? 'Rincian layanan atau tarif berubah. Periksa kembali harga dan durasi sebelum konfirmasi.'
              : 'Permintaan sudah tersimpan, tetapi slot baru diamankan setelah kamu menekan Konfirmasi reservasi.'
        }
      />

      <div className="m-stepper" aria-label="Tahapan reservasi">
        <div className="m-stepper-item is-done">
          <span>✓</span>
          <strong>Pilih layanan &amp; jadwal</strong>
        </div>
        <div className="m-stepper-line is-done" aria-hidden="true" />
        <div className={`m-stepper-item ${confirmed ? 'is-done' : 'is-current'}`}>
          <span>{confirmed ? '✓' : '2'}</span>
          <strong>Tinjau &amp; konfirmasi</strong>
        </div>
        <div className={`m-stepper-line ${confirmed ? 'is-done' : ''}`} aria-hidden="true" />
        <div className={`m-stepper-item ${confirmed ? 'is-current' : ''}`}>
          <span>3</span>
          <strong>Kode reservasi terbit</strong>
        </div>
      </div>

      <section className="m-detail-card">
        <div className="m-section-title">
          <span>01</span>
          <div>
            <h2>Rincian reservasi</h2>
            <p>{confirmed ? 'Komitmen jadwal sudah tersimpan' : 'Periksa kembali layanan, capster, dan jadwal'}</p>
          </div>
        </div>

        {confirmed ? (
          <div className="m-confirmed">
            <Check size={18} aria-hidden="true" />
            <span>
              Jadwal terkonfirmasi · Kode reservasi <strong>{row.code}</strong>
            </span>
          </div>
        ) : (
          <div className="m-pending-banner">
            <StatusBadge status={row.status} />
            <span>Slot belum diamankan hingga konfirmasi berhasil.</span>
          </div>
        )}

        <dl className="m-detail-list">
          <div>
            <dt>Jadwal</dt>
            <dd>
              {date.format(row.start)} · {time.format(row.start)} WIB
            </dd>
          </div>
          <div>
            <dt>Capster</dt>
            <dd>{capsterName}</dd>
          </div>
          {row.items.map((item) => (
            <div key={item.id}>
              <dt>{item.name}</dt>
              <dd>
                {money.format(item.price)} · {item.duration} menit
              </dd>
            </div>
          ))}
          <div>
            <dt>Total harga</dt>
            <dd>{money.format(row.booked_price)}</dd>
          </div>
          <div>
            <dt>Total durasi</dt>
            <dd>
              {row.booked_duration} menit layanan · jeda salon {bufferMins} menit
            </dd>
          </div>
          <div>
            <dt>Nama pelanggan</dt>
            <dd>{row.name}</dd>
          </div>
          <div>
            <dt>Nomor telepon</dt>
            <dd>{row.phone || '—'}</dd>
          </div>
        </dl>

        <Notice text={notice} />

        {confirmed ? (
          <div className="m-actions">
            <span className="m-pill is-neutral">Jadwal terkonfirmasi di sistem Shaga Salon</span>
            <a className="m-secondary" href={account.role === 'staff' ? '/resepsionis' : '/akun'}>
              {account.role === 'staff' ? 'Lihat papan resepsionis' : 'Lihat daftar reservasi'}
            </a>
          </div>
        ) : (
          <div className="m-actions">
            {!conflict && (
              <button type="button" className="m-primary" onClick={confirm} disabled={busy}>
                {busy ? 'Memeriksa kapasitas…' : 'Konfirmasi reservasi'} <ArrowRight size={17} />
              </button>
            )}
            <a className="m-secondary" href={'/reservasi?' + choices.toString()}>
              Kembali memilih jam
            </a>
          </div>
        )}
      </section>

      {confirmed && account.role === 'customer' && <VisitSection id={id} row={row} />}
    </>
  );
}

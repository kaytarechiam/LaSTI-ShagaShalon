import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CalendarPlus,
  CheckCircle2,
  Clock3,
  CreditCard,
  Plus,
  RefreshCw,
  Search,
  UserCheck,
  Users,
} from 'lucide-react';
import {
  addDays,
  api,
  date,
  errorMessage,
  formatTimeWib,
  jakartaToday,
  money,
  PAYMENT_METHOD_LABELS,
  STATUS_LABELS,
  time,
  type OpsBoardResponse,
  type Reservation,
  type SettlementDetailResponse,
  type Slot,
  type TimeBlock,
} from './api';
import { HorizontalMetricChart, HourlyScheduleChart } from './components/Charts';
import {
  AppointmentQuickSheet,
  BlockDetailModal,
  BlockTimeModal,
  CalendarToolbar,
  DayResourceCalendar,
  WeekTeamMatrix,
} from './components/TeamCalendar';
import { EmptyState, MetricCard, Modal, Notice, PageHeader, StatusBadge } from './components/ui';

type DeskTab = 'ALL' | 'QUEUE' | 'RESERVATIONS' | 'SETTLEMENT';

export function StaffDeskView() {
  const [workspaceMode, setWorkspaceMode] = useState<'desk' | 'calendar'>(() =>
    location.hash === '#kalender' ? 'calendar' : 'desk'
  );
  const [calViewMode, setCalViewMode] = useState<'DAY' | 'WEEK'>('DAY');
  const [currentDay, setCurrentDay] = useState(jakartaToday);
  const [day, setDay] = useState(currentDay);
  const [statusFilter, setStatusFilter] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<DeskTab>(() => (location.hash === '#antrean' ? 'QUEUE' : 'ALL'));

  const [calAppointment, setCalAppointment] = useState<Reservation | null>(null);
  const [blockOpen, setBlockOpen] = useState(false);
  const [blockCapster, setBlockCapster] = useState('');
  const [blockDay, setBlockDay] = useState(currentDay);
  const [blockStartMin, setBlockStartMin] = useState<number | undefined>(undefined);
  const [blockTarget, setBlockTarget] = useState<TimeBlock | null>(null);

  const [board, setBoard] = useState<OpsBoardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [notice, setNotice] = useState('');
  const [noticeTone, setNoticeTone] = useState<'error' | 'success' | 'info'>('success');
  const [busyId, setBusyId] = useState<string | null>(null);

  // Walk-in modal state
  const [walkOpen, setWalkOpen] = useState(false);
  const [walkKey, setWalkKey] = useState(() => crypto.randomUUID());
  const [walkName, setWalkName] = useState('');
  const [walkPhone, setWalkPhone] = useState('');
  const [walkService, setWalkService] = useState('');
  const [walkCapster, setWalkCapster] = useState('');
  const [walkSlots, setWalkSlots] = useState<Slot[]>([]);
  const [walkStart, setWalkStart] = useState('');
  const [walkSlotStatus, setWalkSlotStatus] = useState('');
  const [walkBusy, setWalkBusy] = useState(false);
  const [walkError, setWalkError] = useState('');

  // Settlement modal state
  const [settleTarget, setSettleTarget] = useState<Reservation | null>(null);
  const [settleDetail, setSettleDetail] = useState<SettlementDetailResponse | null>(null);
  const [settleLoading, setSettleLoading] = useState(false);
  const [settleError, setSettleError] = useState('');
  const [settleBusy, setSettleBusy] = useState(false);
  const [adjTotal, setAdjTotal] = useState('');
  const [adjReason, setAdjReason] = useState('');
  const [payMethod, setPayMethod] = useState<'CASH' | 'TRANSFER' | 'OTHER'>('CASH');
  const [payReceived, setPayReceived] = useState(false);

  const autoAdvancedRef = useRef(false);
  const skipNextFetchRef = useRef(false);

  const loadBoard = async (
    targetDay = day,
    silent = false,
    mode = workspaceMode,
    calView = calViewMode
  ) => {
    if (!silent) setRefreshing(true);
    const toDay = mode === 'calendar' && calView === 'WEEK' ? addDays(targetDay, 6) : targetDay;
    try {
      const data = await api<OpsBoardResponse>('/ops/board?' + new URLSearchParams({ day: targetDay, to: toDay }));
      if (!autoAdvancedRef.current) {
        autoAdvancedRef.current = true;
        if (targetDay === currentDay && data.rows.length === 0) {
          const nextDay = addDays(currentDay, 1);
          const nextTo = mode === 'calendar' && calView === 'WEEK' ? addDays(nextDay, 6) : nextDay;
          const nextData = await api<OpsBoardResponse>('/ops/board?' + new URLSearchParams({ day: nextDay, to: nextTo }));
          if (nextData.rows.length > 0) {
            skipNextFetchRef.current = true;
            setDay(nextDay);
            setBoard(nextData);
            setLastUpdated(Date.now());
            if (!silent) setNotice('');
            return;
          }
        }
      }
      setBoard(data);
      setLastUpdated(Date.now());
      if (!silent) setNotice('');
    } catch (e) {
      setNoticeTone('error');
      setNotice(errorMessage(e));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (skipNextFetchRef.current) {
      skipNextFetchRef.current = false;
      return;
    }
    void loadBoard(day, false, workspaceMode, calViewMode);
  }, [day, workspaceMode, calViewMode]);

  useEffect(() => {
    const syncHash = () => {
      if (location.hash === '#kalender') {
        setWorkspaceMode('calendar');
      } else {
        setWorkspaceMode('desk');
        if (location.hash === '#antrean') setTab('QUEUE');
      }
    };
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden || walkOpen || settleTarget) return;
      const next = jakartaToday();
      if (next !== currentDay) {
        setCurrentDay(next);
        if (day === currentDay) setDay(next);
      }
      void loadBoard(day, true);
    }, 20000);
    return () => clearInterval(timer);
  }, [day, currentDay, walkOpen, settleTarget]);

  useEffect(() => {
    if (!walkOpen || !walkService || !walkCapster) {
      setWalkSlots([]);
      setWalkStart('');
      setWalkSlotStatus(walkService ? 'Pilih capster untuk melihat jam tersedia hari ini.' : '');
      return;
    }
    let active = true;
    setWalkSlotStatus('Mencari jam tersedia hari ini…');
    api<{ slots: Slot[] }>(
      '/slots?' + new URLSearchParams({ day: currentDay, capster: walkCapster, service: walkService })
    )
      .then((res) => {
        if (!active) return;
        setWalkSlots(res.slots);
        setWalkStart(res.slots[0] ? String(res.slots[0].start) : '');
        setWalkSlotStatus(
          res.slots.length
            ? `Tersedia ${res.slots.length} slot hari ini.`
            : 'Tidak ada slot yang cukup. Pilih capster lain atau buat reservasi tanggal lain.'
        );
      })
      .catch((e) => {
        if (active) setWalkSlotStatus(errorMessage(e));
      });
    return () => {
      active = false;
    };
  }, [walkOpen, walkService, walkCapster, currentDay]);

  const openSettlement = async (row: Reservation) => {
    setSettleTarget(row);
    setSettleDetail(null);
    setSettleError('');
    setAdjTotal(String(row.booked_price));
    setAdjReason('');
    setPayMethod('CASH');
    setPayReceived(false);
    setSettleLoading(true);
    try {
      const detail = await api<SettlementDetailResponse>('/settlement/detail?' + new URLSearchParams({ id: row.id }));
      setSettleDetail(detail);
      if (detail.invoice) setAdjTotal(String(detail.invoice.total));
    } catch (e) {
      setSettleError(errorMessage(e));
    } finally {
      setSettleLoading(false);
    }
  };

  const handleCheckIn = async (row: Reservation) => {
    setBusyId(row.id);
    setNotice('');
    try {
      const result = await api<Reservation>('/ops/check-in', { id: row.id });
      setNoticeTone('success');
      setNotice(`Check-in berhasil untuk ${row.name}. Nomor antrean #${result.ticket}.`);
      await loadBoard(day, true);
    } catch (e) {
      setNoticeTone('error');
      setNotice(errorMessage(e));
    } finally {
      setBusyId(null);
    }
  };

  const submitWalkIn = async (e: FormEvent) => {
    e.preventDefault();
    setWalkBusy(true);
    setWalkError('');
    try {
      const result = await api<Reservation>('/ops/walk-in', {
        name: walkName,
        phone: walkPhone,
        service: walkService,
        capster: walkCapster,
        start: Number(walkStart),
        requestKey: walkKey,
      });
      setWalkKey(crypto.randomUUID());
      setWalkOpen(false);
      setWalkName('');
      setWalkPhone('');
      setWalkService('');
      setWalkCapster('');
      setDay(currentDay);
      setStatusFilter('');
      setNoticeTone('success');
      setNotice(`Walk-in diterima untuk ${result.name}. Nomor antrean #${result.ticket}.`);
      await loadBoard(currentDay, true);
    } catch (err) {
      setWalkError(errorMessage(err));
    } finally {
      setWalkBusy(false);
    }
  };

  const runSettlementAction = async (action: 'create' | 'adjust' | 'pay') => {
    if (!settleTarget) return;
    setSettleBusy(true);
    setSettleError('');
    try {
      const payload =
        action === 'create'
          ? { id: settleTarget.id }
          : action === 'adjust'
            ? { id: settleTarget.id, total: Number(adjTotal), reason: adjReason }
            : { id: settleTarget.id, method: payMethod, received: payReceived };
      const invoice = await api<SettlementDetailResponse['invoice']>(`/settlement/${action}`, payload);
      setSettleDetail((prev) => (prev ? { ...prev, invoice } : { invoice, visitStatus: 'DONE' }));
      if (invoice) setAdjTotal(String(invoice.total));
      setAdjReason('');
      await loadBoard(day, true);
    } catch (err) {
      setSettleError(errorMessage(err));
    } finally {
      setSettleBusy(false);
    }
  };

  const capsterName = (id: string) => board?.settings.capsters.find((c) => c.id === id)?.name || id;
  const term = search.trim().toLocaleLowerCase('id-ID');
  const allRows = board?.rows || [];
  const filteredRows = allRows.filter(
    (r) =>
      (!statusFilter || (r.visit_status || r.status) === statusFilter) &&
      (!paymentFilter || r.payment_status === paymentFilter) &&
      (!term ||
        [r.name, r.code, r.phone].some((val) =>
          String(val || '').toLocaleLowerCase('id-ID').includes(term)
        ))
  );

  const queueRows = filteredRows.filter((r) => Boolean(r.ticket));
  const reservationRows = filteredRows.filter((r) => r.channel !== 'WALK_IN');
  const settlementRows = filteredRows.filter((r) => r.visit_status === 'DONE');
  const supportsPayments = allRows.some((r) => r.payment_status !== undefined);

  const visibleRows =
    tab === 'QUEUE'
      ? queueRows
      : tab === 'RESERVATIONS'
        ? reservationRows
        : tab === 'SETTLEMENT'
          ? settlementRows
          : filteredRows;

  const waitingCheckInCount = allRows.filter((r) => r.status === 'CONFIRMED' && !r.visit_status).length;
  const activeQueueCount = allRows.filter((r) => r.visit_status === 'WAITING' || r.visit_status === 'ACTIVE').length;
  const readyOrUnpaidCount = allRows.filter(
    (r) => r.payment_status === 'READY' || r.payment_status === 'UNPAID'
  ).length;

  const activeServices = board?.settings.services.filter((s) => s.active) || [];
  const walkEligibleCapsters =
    board?.settings.capsters.filter((c) => c.active && (!walkService || c.skills.includes(walkService))) || [];

  const capsterLoadRows = (board?.settings.capsters || [])
    .filter((c) => c.active)
    .map((c) => {
      const capRows = allRows.filter((r) => r.capster === c.id);
      const mins = capRows.reduce((sum, r) => sum + (r.booked_duration || 0), 0);
      return {
        label: c.name,
        value: mins,
        meta: `${capRows.length} jadwal · shift ${String(c.start).padStart(2, '0')}:00–${String(c.end).padStart(2, '0')}:00`,
      };
    });

  const renderCard = (r: Reservation) => {
    const canCheckIn = r.day === currentDay && r.status === 'CONFIRMED' && !r.visit_status;
    const canSettle = r.visit_status === 'DONE';
    return (
      <article className="m-ops-card" key={r.id}>
        <div className="m-ops-card-main">
          <div className="m-ops-card-top">
            <div className="m-card-badges">
              <StatusBadge status={r.visit_status || r.status} />
              {r.channel && <StatusBadge status={r.channel} variant="channel" />}
              {r.payment_status && <StatusBadge status={r.payment_status} variant="payment" />}
            </div>
            {r.code && <span className="m-code-chip">{r.code}</span>}
          </div>

          <div className="m-ops-card-title">
            <h3>{r.name}</h3>
            <span>{r.phone || '—'}</span>
          </div>

          <p className="m-ops-meta">
            <strong>{time.format(r.start)} WIB</strong> · {date.format(r.start)} · Capster{' '}
            <strong>{capsterName(r.capster)}</strong>
          </p>

          <ul className="m-ops-items">
            {r.items.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>
                  {item.duration} mnt · {money.format(item.price)}
                </span>
              </li>
            ))}
          </ul>

          <div className="m-ops-card-total">
            <span>Total ({r.booked_duration} menit)</span>
            <strong>{money.format(r.booked_price)}</strong>
          </div>
        </div>

        {(r.ticket || canCheckIn || canSettle) && (
          <div className="m-ops-card-side">
            {r.ticket && (
              <div className="m-ticket-box">
                <span className="m-eyebrow">ANTREAN</span>
                <strong>#{r.ticket}</strong>
                <small>Tiba {formatTimeWib(r.arrived)}</small>
                {r.eta && <small>Est. mulai {formatTimeWib(r.eta)}</small>}
                {r.estimate && <small>Est. selesai {formatTimeWib(r.estimate)}</small>}
                {r.started && (
                  <small>
                    Mulai {formatTimeWib(r.started)}
                    {r.ended ? ` · Selesai ${formatTimeWib(r.ended)}` : ''}
                  </small>
                )}
              </div>
            )}

            {canCheckIn && (
              <button
                type="button"
                className="m-primary m-btn-sm"
                disabled={busyId === r.id}
                onClick={() => void handleCheckIn(r)}
              >
                <UserCheck size={16} />
                {busyId === r.id ? 'Memproses…' : 'Check-in'}
              </button>
            )}

            {canSettle && (
              <button
                type="button"
                className="m-secondary m-btn-sm"
                onClick={() => void openSettlement(r)}
              >
                <CreditCard size={16} />
                {r.payment_status === 'PAID' ? 'Lihat tagihan' : 'Tagihan & pembayaran'}
              </button>
            )}
          </div>
        )}
      </article>
    );
  };

  return (
    <>
      <PageHeader
        eyebrow={workspaceMode === 'calendar' ? 'KALENDER OPERASIONAL SALON' : 'MEJA RESEPSIONIS & KASIR'}
        title={
          workspaceMode === 'calendar' ? (
            <>
              Kalender <em>tim salon.</em>
            </>
          ) : (
            <>
              Reservasi &amp; <em>kedatangan.</em>
            </>
          )
        }
        description={
          workspaceMode === 'calendar'
            ? 'Pantau slot terisi dan jam kosong lintas capster secara real-time, kelola blok waktu istirahat, dan terima pelanggan.'
            : 'Kelola check-in reservasi, penerimaan walk-in, antrean harian, dan pencatatan tagihan.'
        }
        actions={
          <div className="m-header-cta-group">
            <button
              type="button"
              className="m-secondary"
              onClick={() => {
                setWalkError('');
                setWalkOpen(true);
              }}
            >
              <Plus size={16} /> Terima walk-in
            </button>
            <a className="m-primary" href="/reservasi">
              <CalendarPlus size={16} /> Buat reservasi
            </a>
          </div>
        }
      />

      {workspaceMode === 'calendar' ? (
        <>
          <CalendarToolbar
            day={day}
            todayDay={currentDay}
            viewMode={calViewMode}
            onChangeDay={setDay}
            onChangeViewMode={setCalViewMode}
            onAddBlock={() => {
              setBlockCapster(board?.settings.capsters.find((c) => c.active)?.id || 'a');
              setBlockDay(day);
              setBlockStartMin(undefined);
              setBlockOpen(true);
            }}
          />
          <Notice text={notice} tone={noticeTone} />
          {loading || !board ? (
            <div className="m-loading-box" role="status">
              Memuat kalender tim salon…
            </div>
          ) : calViewMode === 'DAY' ? (
            <DayResourceCalendar
              day={day}
              todayDay={currentDay}
              capsters={board.settings.capsters.filter((c) => c.active)}
              rows={allRows}
              blocks={board.settings.blocks || []}
              rules={board.settings.rules}
              onSelectAppointment={setCalAppointment}
              onAddBlock={(capId, sMin) => {
                setBlockCapster(capId);
                setBlockDay(day);
                setBlockStartMin(sMin);
                setBlockOpen(true);
              }}
              onSelectBlock={setBlockTarget}
            />
          ) : (
            <WeekTeamMatrix
              startDay={day}
              todayDay={currentDay}
              capsters={board.settings.capsters.filter((c) => c.active)}
              rows={allRows}
              blocks={board.settings.blocks || []}
              rules={board.settings.rules}
              onSelectDay={(selectedDay) => {
                setDay(selectedDay);
                setCalViewMode('DAY');
              }}
              onAddBlock={(capId, targetDay) => {
                setBlockCapster(capId);
                setBlockDay(targetDay);
                setBlockStartMin(undefined);
                setBlockOpen(true);
              }}
            />
          )}
        </>
      ) : (
        <>
      <div className="m-metrics-grid m-metrics-4">
        <MetricCard
          label="Total jadwal tanggal ini"
          value={allRows.length}
          hint={`${day} (WIB)`}
          icon={<CalendarDays size={17} />}
        />
        <MetricCard
          label="Menunggu check-in"
          value={waitingCheckInCount}
          hint="Terkonfirmasi belum tiba"
          tone={waitingCheckInCount > 0 ? 'accent' : 'default'}
          icon={<UserCheck size={17} />}
        />
        <MetricCard
          label="Dalam antrean / dilayani"
          value={activeQueueCount}
          hint="Memiliki tiket aktif"
          tone={activeQueueCount > 0 ? 'warning' : 'default'}
          icon={<Users size={17} />}
        />
        <MetricCard
          label="Siap ditagihkan / belum lunas"
          value={supportsPayments ? readyOrUnpaidCount : '—'}
          hint="Selesai dilayani"
          tone={readyOrUnpaidCount > 0 ? 'warning' : 'default'}
          icon={<CreditCard size={17} />}
        />
      </div>

      {board && (
        <div className="m-charts-grid m-desk-charts">
          <HourlyScheduleChart
            title="Kepadatan jadwal per jam"
            subtitle={`Distribusi reservasi & walk-in pada ${day} (WIB)`}
            rows={allRows}
            rules={board.settings.rules}
          />
          <HorizontalMetricChart
            title="Beban layanan per capster"
            subtitle="Akumulasi durasi layanan terjadwal pada tanggal terpilih"
            unitLabel="Menit layanan"
            rows={capsterLoadRows}
            formatValue={(v) => `${v} menit`}
            emptyMessage="Belum ada beban layanan tercatat pada tanggal ini."
            barColor="#ad684f"
          />
        </div>
      )}

      <section className="m-toolbar-card" aria-label="Filter dan pencarian">
        <div className="m-toolbar-grid">
          <label>
            Tanggal
            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              max="9999-12-31"
            />
          </label>
          <label>
            Status
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">Semua status</option>
              {Object.entries(STATUS_LABELS).map(([k, label]) => (
                <option key={k} value={k}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Pembayaran
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              disabled={!supportsPayments}
            >
              <option value="">Semua pembayaran</option>
              <option value="NOT_READY">Pelayanan belum selesai</option>
              <option value="READY">Siap ditagihkan</option>
              <option value="UNPAID">Belum lunas</option>
              <option value="PAID">Lunas</option>
            </select>
          </label>
          <label>
            Cari nama, kode, atau telepon
            <div className="m-input-icon">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nama / SH-... / 08..."
                maxLength={100}
              />
            </div>
          </label>
        </div>
        <div className="m-toolbar-foot">
          <p className="m-updated" role="status">
            {lastUpdated
              ? `Diperbarui ${formatTimeWib(lastUpdated)} · Estimasi dapat berubah.`
              : 'Memuat papan operasional…'}
          </p>
          <button
            type="button"
            className="m-ghost-btn"
            onClick={() => void loadBoard(day)}
            disabled={refreshing}
          >
            <RefreshCw size={14} className={refreshing ? 'm-spin' : ''} />
            {refreshing ? 'Memperbarui…' : 'Muat ulang'}
          </button>
        </div>
      </section>

      <div className="m-filter-pills" role="tablist" aria-label="Tampilan daftar">
        {(
          [
            ['ALL', `Semua (${filteredRows.length})`],
            ['QUEUE', `Antrean harian (${queueRows.length})`],
            ['RESERVATIONS', `Daftar reservasi (${reservationRows.length})`],
            ['SETTLEMENT', `Tagihan & kasir (${settlementRows.length})`],
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

      <Notice text={notice} tone={noticeTone} />

      {loading ? (
        <div className="m-loading-box" role="status">
          Memuat daftar reservasi dan antrean…
        </div>
      ) : visibleRows.length === 0 ? (
        <EmptyState
          icon={<Users size={25} strokeWidth={1.5} />}
          title="Belum ada data untuk pilihan ini"
          description="Ubah filter tanggal, status, atau kata kunci pencarian, atau terima pelanggan walk-in baru."
        />
      ) : (
        <div className="m-stack-sm" id={tab === 'QUEUE' ? 'antrean' : undefined}>
          {visibleRows.map(renderCard)}
        </div>
      )}
        </>
      )}

      <AppointmentQuickSheet
        appointment={calAppointment}
        capsters={board?.settings.capsters || []}
        onClose={() => setCalAppointment(null)}
      >
        {calAppointment && (
          <div className="m-actions">
            {calAppointment.day === currentDay &&
              calAppointment.status === 'CONFIRMED' &&
              !calAppointment.visit_status && (
                <button
                  type="button"
                  className="m-primary"
                  disabled={busyId === calAppointment.id}
                  onClick={() => {
                    void handleCheckIn(calAppointment);
                    setCalAppointment(null);
                  }}
                >
                  <UserCheck size={16} /> Check-in sekarang
                </button>
              )}
            {calAppointment.visit_status === 'DONE' && (
              <button
                type="button"
                className="m-secondary"
                onClick={() => {
                  const target = calAppointment;
                  setCalAppointment(null);
                  void openSettlement(target);
                }}
              >
                <CreditCard size={16} /> Tagihan &amp; pembayaran
              </button>
            )}
          </div>
        )}
      </AppointmentQuickSheet>

      <BlockTimeModal
        open={blockOpen}
        onOpenChange={setBlockOpen}
        capsters={board?.settings.capsters.filter((c) => c.active) || []}
        initialCapster={blockCapster}
        initialDay={blockDay}
        initialStartMin={blockStartMin}
        minDay={currentDay}
        onCreated={() => loadBoard(day, true, workspaceMode, calViewMode)}
      />

      <BlockDetailModal
        block={blockTarget}
        capsters={board?.settings.capsters || []}
        canDelete={true}
        onClose={() => setBlockTarget(null)}
        onDeleted={() => loadBoard(day, true, workspaceMode, calViewMode)}
      />

      <Modal
        open={walkOpen}
        onOpenChange={setWalkOpen}
        title="Terima pelanggan walk-in"
        description="Memeriksa kapasitas layanan + buffer hari ini dan langsung menerbitkan tiket antrean."
      >
        <form className="m-form" onSubmit={submitWalkIn}>
          <div className="m-grid-two">
            <label>
              Nama pelanggan
              <input
                value={walkName}
                onChange={(e) => setWalkName(e.target.value)}
                required
                minLength={2}
                maxLength={100}
                placeholder="Nama lengkap"
              />
            </label>
            <label>
              Nomor telepon
              <input
                type="tel"
                value={walkPhone}
                onChange={(e) => setWalkPhone(e.target.value)}
                required
                maxLength={22}
                placeholder="08..."
              />
            </label>
          </div>
          <label>
            Layanan
            <select
              value={walkService}
              onChange={(e) => {
                setWalkService(e.target.value);
                setWalkCapster('');
                setWalkStart('');
              }}
              required
            >
              <option value="">Pilih layanan</option>
              {activeServices.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.duration} mnt · {money.format(s.price)})
                </option>
              ))}
            </select>
          </label>
          <label>
            Capster
            <select
              value={walkCapster}
              onChange={(e) => {
                setWalkCapster(e.target.value);
                setWalkStart('');
              }}
              required
              disabled={!walkService}
            >
              <option value="">{walkService ? 'Pilih capster kompeten' : 'Pilih layanan dahulu'}</option>
              {walkEligibleCapsters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Jam tersedia hari ini (WIB)
            <select
              value={walkStart}
              onChange={(e) => setWalkStart(e.target.value)}
              required
              disabled={!walkSlots.length}
            >
              <option value="">{walkSlots.length ? 'Pilih jam' : 'Belum ada slot'}</option>
              {walkSlots.map((s) => (
                <option key={s.start} value={s.start}>
                  {formatTimeWib(s.start)}
                </option>
              ))}
            </select>
          </label>
          {walkSlotStatus && (
            <p className="m-slot-note" role="status">
              <Clock3 size={14} /> {walkSlotStatus}
            </p>
          )}
          <Notice text={walkError} />
          <div className="m-actions">
            <button type="submit" className="m-primary" disabled={walkBusy || !walkStart}>
              {walkBusy ? 'Memproses…' : 'Terima & buat tiket'} <ArrowRight size={16} />
            </button>
            <button type="button" className="m-secondary" onClick={() => setWalkOpen(false)}>
              Batal
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={Boolean(settleTarget)}
        onOpenChange={(next) => {
          if (!next) setSettleTarget(null);
        }}
        title={settleTarget ? `Tagihan · ${settleTarget.name}` : 'Tagihan'}
        description={
          settleTarget
            ? `${settleTarget.items.map((i) => i.name).join(' + ')} · ${formatTimeWib(settleTarget.start)}`
            : undefined
        }
      >
        {settleLoading ? (
          <div className="m-loading-box" role="status">
            Memuat rincian tagihan…
          </div>
        ) : (
          <div className="m-stack-sm">
            <Notice text={settleError} />
            {settleDetail && !settleDetail.invoice && (
              <div className="m-subcard">
                <p className="m-muted">
                  Tagihan akan dibuat dari rincian layanan yang tercatat ({money.format(settleTarget?.booked_price || 0)}).
                </p>
                <button
                  type="button"
                  className="m-primary"
                  disabled={settleBusy}
                  onClick={() => void runSettlementAction('create')}
                >
                  {settleBusy ? 'Membuat tagihan…' : 'Buat tagihan'} <ArrowRight size={16} />
                </button>
              </div>
            )}

            {settleDetail?.invoice && (
              <>
                <div className="m-invoice-summary">
                  <div>
                    <span>Total tagihan</span>
                    <strong>{money.format(settleDetail.invoice.total)}</strong>
                  </div>
                  <StatusBadge status={settleDetail.invoice.paid_at ? 'PAID' : 'UNPAID'} variant="payment" />
                </div>

                {settleDetail.invoice.paid_at && (
                  <div className="m-confirmed">
                    <CheckCircle2 size={17} />
                    <span>
                      Lunas ({PAYMENT_METHOD_LABELS[settleDetail.invoice.method || ''] || settleDetail.invoice.method}) ·{' '}
                      {date.format(settleDetail.invoice.paid_at)} {formatTimeWib(settleDetail.invoice.paid_at)}
                    </span>
                  </div>
                )}

                {Boolean(settleDetail.invoice.adjustments?.length) && (
                  <div className="m-subcard">
                    <h4>Riwayat koreksi</h4>
                    {settleDetail.invoice.adjustments?.map((a, idx) => (
                      <p key={idx} className="m-muted">
                        {a.actor}: {money.format(a.old_total)} → {money.format(a.new_total)} ({a.reason})
                      </p>
                    ))}
                  </div>
                )}

                {!settleDetail.invoice.paid_at && (
                  <>
                    <form
                      className="m-subcard m-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        void runSettlementAction('adjust');
                      }}
                    >
                      <h4>Koreksi nominal (opsional)</h4>
                      <div className="m-grid-two">
                        <label>
                          Total baru (Rp)
                          <input
                            type="number"
                            min={0}
                            max={1000000000}
                            value={adjTotal}
                            onChange={(e) => setAdjTotal(e.target.value)}
                            required
                          />
                        </label>
                        <label>
                          Alasan koreksi
                          <input
                            value={adjReason}
                            onChange={(e) => setAdjReason(e.target.value)}
                            maxLength={500}
                            placeholder="Contoh: diskon / penyesuaian"
                            required
                          />
                        </label>
                      </div>
                      <button type="submit" className="m-secondary" disabled={settleBusy}>
                        Simpan koreksi
                      </button>
                    </form>

                    <form
                      className="m-subcard m-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        void runSettlementAction('pay');
                      }}
                    >
                      <h4>Catat pembayaran lunas</h4>
                      <p className="m-muted">
                        Pencatatan kasir dilakukan setelah petugas memverifikasi dana diterima. Aplikasi tidak memproses dana secara otomatis.
                      </p>
                      <label>
                        Metode pembayaran
                        <select
                          value={payMethod}
                          onChange={(e) => setPayMethod(e.target.value as 'CASH' | 'TRANSFER' | 'OTHER')}
                        >
                          <option value="CASH">Tunai</option>
                          <option value="TRANSFER">Transfer</option>
                          <option value="OTHER">Lainnya</option>
                        </select>
                      </label>
                      <label className="m-checkbox-row">
                        <input
                          type="checkbox"
                          checked={payReceived}
                          onChange={(e) => setPayReceived(e.target.checked)}
                          required
                        />
                        <span>Saya memastikan pembayaran sebesar {money.format(settleDetail.invoice.total)} telah diterima.</span>
                      </label>
                      <button type="submit" className="m-primary" disabled={settleBusy || !payReceived}>
                        {settleBusy ? 'Mencatat…' : 'Catat pembayaran lunas'} <ArrowRight size={16} />
                      </button>
                    </form>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}

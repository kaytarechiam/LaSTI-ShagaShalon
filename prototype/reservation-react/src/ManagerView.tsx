import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertTriangle,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Coffee,
  MessageSquare,
  Play,
  RefreshCw,
  Save,
  Settings,
  ShieldCheck,
  Timer,
  UploadCloud,
  Users,
} from 'lucide-react';
import {
  addDays,
  api,
  ApiError,
  date,
  errorMessage,
  formatDayId,
  formatShortDayId,
  formatTimeWib,
  jakartaToday,
  money,
  PAYMENT_METHOD_LABELS,
  STATUS_LABELS,
  time,
  type OpsBoardResponse,
  type OpsConfig,
  type Reservation,
  type Rules,
  type SettlementReportResponse,
  type TimeBlock,
} from './api';
import {
  CHART_TONES,
  DailySeriesChart,
  DonutBreakdownChart,
  HorizontalMetricChart,
  HourlyScheduleChart,
} from './components/Charts';
import {
  AppointmentQuickSheet,
  BlockDetailModal,
  BlockTimeModal,
  CalendarToolbar,
  DayResourceCalendar,
  WeekTeamMatrix,
} from './components/TeamCalendar';
import { EmptyState, MetricCard, Modal, Notice, PageHeader, StatusBadge } from './components/ui';

type ManagerSection = 'overview' | 'calendar' | 'settings';
type SettingsTab = 'rules' | 'services' | 'capsters';

const RULES_FIELDS: Array<{ key: keyof Rules; label: string; unit: string; min: number; max: number }> = [
  { key: 'open', label: 'Jam buka salon', unit: 'Jam (0–24 WIB)', min: 0, max: 24 },
  { key: 'close', label: 'Jam tutup Senin–Sabtu', unit: 'Jam (0–24 WIB)', min: 0, max: 24 },
  { key: 'sunday', label: 'Jam tutup Minggu', unit: 'Jam (0–24 WIB)', min: 0, max: 24 },
  { key: 'breakStart', label: 'Mulai jam istirahat', unit: 'Jam (0–24 WIB)', min: 0, max: 24 },
  { key: 'breakEnd', label: 'Akhir jam istirahat', unit: 'Jam (0–24 WIB)', min: 0, max: 24 },
  { key: 'buffer', label: 'Jeda antarlayanan (buffer)', unit: 'Menit (0–120)', min: 0, max: 120 },
  { key: 'early', label: 'Batas awal check-in', unit: 'Menit sebelum jadwal', min: 0, max: 240 },
  { key: 'late', label: 'Batas terlambat check-in', unit: 'Menit setelah jadwal', min: 0, max: 240 },
];

const DAYS_OF_WEEK = [
  { value: -1, label: 'Tanpa hari libur' },
  { value: 0, label: 'Minggu' },
  { value: 1, label: 'Senin' },
  { value: 2, label: 'Selasa' },
  { value: 3, label: 'Rabu' },
  { value: 4, label: 'Kamis' },
  { value: 5, label: 'Jumat' },
  { value: 6, label: 'Sabtu' },
];

function buildBoardReportFallback(
  from: string,
  to: string,
  boardRows: Reservation[]
): SettlementReportResponse {
  const reservations = boardRows.filter(
    (r) => r.status === 'CONFIRMED' && r.channel !== 'WALK_IN'
  ).length;
  const visits = boardRows.filter((r) => Boolean(r.visit_status || r.ticket)).length;
  const walkins = boardRows.filter((r) => r.channel === 'WALK_IN').length;
  const doneRows = boardRows.filter((r) => r.visit_status === 'DONE');

  const paidRows = doneRows.filter(
    (r) => r.payment_status === 'PAID' || r.payment_status === undefined
  );
  const unpaidRows = doneRows.filter(
    (r) => r.payment_status === 'UNPAID' || r.payment_status === 'READY'
  );
  const paidTotal = paidRows.reduce((sum, r) => sum + (r.booked_price || 0), 0);
  const unpaidTotal = unpaidRows.reduce((sum, r) => sum + (r.booked_price || 0), 0);

  const serviceCounts = new Map<string, number>();
  for (const r of doneRows.length ? doneRows : boardRows) {
    for (const item of r.items) {
      serviceCounts.set(item.name, (serviceCounts.get(item.name) || 0) + 1);
    }
  }
  const popular = [...serviceCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }));

  const statusCounts = new Map<string, number>();
  for (const r of boardRows) {
    statusCounts.set(r.status, (statusCounts.get(r.status) || 0) + 1);
  }
  const statuses = [...statusCounts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([status, count]) => ({ status, count }));

  const series: SettlementReportResponse['series'] = [];
  let cursor = from;
  for (let i = 0; i < 90 && cursor <= to; i += 1) {
    const dayVisits = boardRows.filter(
      (r) => r.day === cursor && Boolean(r.visit_status || r.ticket)
    );
    const dayPaid = dayVisits.filter(
      (r) =>
        r.visit_status === 'DONE' &&
        (r.payment_status === 'PAID' || r.payment_status === undefined)
    );
    series.push({
      day: cursor,
      visits: dayVisits.length,
      payments: dayPaid.length,
      paid_total: dayPaid.reduce((sum, r) => sum + (r.booked_price || 0), 0),
    });
    cursor = addDays(cursor, 1);
  }

  return {
    counts: { reservations, visits, walkins, finished: doneRows.length },
    payments: { count: paidRows.length, total: paidTotal },
    methods: paidRows.length > 0 ? [{ method: 'CASH', count: paidRows.length, total: paidTotal }] : [],
    feedback: { count: 0, average: null },
    popular,
    comments: [],
    invoices: { count: doneRows.length, unpaid_count: unpaidRows.length, unpaid_total: unpaidTotal },
    statuses,
    ratings: [],
    series,
  };
}

export function ManagerView() {
  const [section, setSection] = useState<ManagerSection>(() =>
    location.hash === '#pengaturan'
      ? 'settings'
      : location.hash === '#kalender'
        ? 'calendar'
        : 'overview'
  );
  const [settingsTab, setSettingsTab] = useState<SettingsTab>('rules');
  const [currentDay, setCurrentDay] = useState(jakartaToday);
  const [fromDay, setFromDay] = useState(() => addDays(currentDay, -6));
  const [toDay, setToDay] = useState(currentDay);
  const [draftFrom, setDraftFrom] = useState(() => addDays(currentDay, -6));
  const [draftTo, setDraftTo] = useState(currentDay);

  const [board, setBoard] = useState<OpsBoardResponse | null>(null);
  const [report, setReport] = useState<SettlementReportResponse | null>(null);
  const [reportState, setReportState] = useState<'idle' | 'loading' | 'ready' | 'unsupported' | 'error'>('idle');
  const [reportMessage, setReportMessage] = useState('');

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [notice, setNotice] = useState('');
  const [noticeTone, setNoticeTone] = useState<'error' | 'success' | 'info'>('success');

  const [followups, setFollowups] = useState<Record<string, string>>({});
  const [followupBusy, setFollowupBusy] = useState<string | null>(null);

  const [editConfig, setEditConfig] = useState<OpsConfig | null>(null);
  const [dirty, setDirty] = useState(false);
  const [settingsBusy, setSettingsBusy] = useState<'draft' | 'validate' | 'publish' | null>(null);
  const [conflicts, setConflicts] = useState<Array<{ code: string; day: string }>>([]);

  // Calendar & Smart Scheduling state
  const [calDay, setCalDay] = useState(currentDay);
  const [calViewMode, setCalViewMode] = useState<'DAY' | 'WEEK'>('DAY');
  const [calBoard, setCalBoard] = useState<OpsBoardResponse | null>(null);
  const [calLoading, setCalLoading] = useState(false);
  const [calAppointment, setCalAppointment] = useState<Reservation | null>(null);
  const [blockOpen, setBlockOpen] = useState(false);
  const [blockCapster, setBlockCapster] = useState('a');
  const [blockDay, setBlockDay] = useState(currentDay);
  const [blockStartMin, setBlockStartMin] = useState<number | undefined>(undefined);
  const [blockTarget, setBlockTarget] = useState<TimeBlock | null>(null);

  // Quick Shift Editor modal state
  const [shiftModalOpen, setShiftModalOpen] = useState(false);
  const [shiftTargetId, setShiftTargetId] = useState('a');
  const [shiftStart, setShiftStart] = useState(9);
  const [shiftEnd, setShiftEnd] = useState(18);
  const [shiftOff, setShiftOff] = useState(1);
  const [shiftActive, setShiftActive] = useState(true);
  const [shiftBusy, setShiftBusy] = useState(false);
  const [shiftError, setShiftError] = useState('');

  // Quick Extra Time & Break Rules modal state
  const [extraModalOpen, setExtraModalOpen] = useState(false);
  const [extraBuffer, setExtraBuffer] = useState(15);
  const [extraBreakStart, setExtraBreakStart] = useState(12);
  const [extraBreakEnd, setExtraBreakEnd] = useState(13);
  const [extraBusy, setExtraBusy] = useState(false);
  const [extraError, setExtraError] = useState('');

  useEffect(() => {
    const syncHash = () =>
      setSection(
        location.hash === '#pengaturan'
          ? 'settings'
          : location.hash === '#kalender'
            ? 'calendar'
            : 'overview'
      );
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const switchSection = (next: ManagerSection) => {
    setSection(next);
    const targetHash = next === 'settings' ? '#pengaturan' : next === 'calendar' ? '#kalender' : '';
    if (location.hash !== targetHash) {
      history.replaceState(null, '', '/manajemen' + targetHash);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  const loadReport = async (from = fromDay, to = toDay, boardRows: Reservation[] = board?.rows || []) => {
    setReportState('loading');
    setReportMessage('');
    try {
      const data = await api<SettlementReportResponse>(
        '/settlement/report?' + new URLSearchParams({ from, to })
      );
      setReport(data);
      setReportState('ready');
    } catch (e) {
      if (e instanceof ApiError && e.status === 501) {
        setReport(buildBoardReportFallback(from, to, boardRows));
        setReportState('ready');
      } else {
        setReport(null);
        setReportState('error');
        setReportMessage(errorMessage(e));
      }
    }
  };

  const loadAll = async (from = fromDay, to = toDay, silent = false) => {
    if (!silent) setRefreshing(true);
    try {
      const data = await api<OpsBoardResponse>('/ops/board?' + new URLSearchParams({ day: from, to }));
      setBoard(data);
      setLastUpdated(Date.now());
      if (!dirty) {
        const base = data.draft?.version === data.settings.version ? data.draft : data.settings;
        setEditConfig(structuredClone(base));
      }
      if (section === 'overview') {
        await loadReport(from, to, data.rows);
      }
    } catch (e) {
      setNoticeTone('error');
      setNotice(errorMessage(e));
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    void loadAll(fromDay, toDay);
  }, [fromDay, toDay, section]);

  const loadCalendar = async (targetDay = calDay, mode = calViewMode, silent = false) => {
    if (!silent) setCalLoading(true);
    const to = mode === 'WEEK' ? addDays(targetDay, 6) : targetDay;
    try {
      const data = await api<OpsBoardResponse>('/ops/board?' + new URLSearchParams({ day: targetDay, to }));
      setCalBoard(data);
    } catch (e) {
      setNoticeTone('error');
      setNotice(errorMessage(e));
    } finally {
      setCalLoading(false);
    }
  };

  useEffect(() => {
    if (section === 'calendar') {
      void loadCalendar(calDay, calViewMode);
    }
  }, [section, calDay, calViewMode]);

  const openShiftEditor = (cap: OpsConfig['capsters'][0]) => {
    setShiftTargetId(cap.id);
    setShiftStart(cap.start);
    setShiftEnd(cap.end);
    setShiftOff(cap.off);
    setShiftActive(cap.active);
    setShiftError('');
    setShiftModalOpen(true);
  };

  const openExtraEditor = () => {
    const activeRules = (calBoard || board)?.settings.rules;
    if (activeRules) {
      setExtraBuffer(activeRules.buffer);
      setExtraBreakStart(activeRules.breakStart);
      setExtraBreakEnd(activeRules.breakEnd);
    }
    setExtraError('');
    setExtraModalOpen(true);
  };

  const publishConfigUpdate = async (nextConfig: OpsConfig) => {
    await api('/ops/draft', nextConfig);
    const validation = await api<{ conflicts: Array<{ code: string; day: string }>; published: boolean }>(
      '/ops/validate',
      {}
    );
    if (validation.conflicts.length > 0) {
      const list = validation.conflicts.map((c) => `${c.code} (${c.day})`).join(', ');
      throw new Error(`Bentrok dengan reservasi aktif: ${list}`);
    }
    await api('/ops/publish', {});
    setDirty(false);
    setConflicts([]);
    await Promise.all([loadCalendar(calDay, calViewMode, true), loadAll(fromDay, toDay, true)]);
  };

  const submitShiftEdit = async (e: FormEvent) => {
    e.preventDefault();
    const baseCfg = (calBoard || board)?.settings;
    if (!baseCfg) return;
    setShiftBusy(true);
    setShiftError('');
    try {
      const nextCapsters = baseCfg.capsters.map((c) =>
        c.id === shiftTargetId
          ? { ...c, start: shiftStart, end: shiftEnd, off: shiftOff, active: shiftActive }
          : c
      );
      await publishConfigUpdate({ ...baseCfg, capsters: nextCapsters });
      setShiftModalOpen(false);
      setNoticeTone('success');
      setNotice('Jadwal shift capster berhasil diperbarui.');
    } catch (err) {
      setShiftError(errorMessage(err));
    } finally {
      setShiftBusy(false);
    }
  };

  const submitExtraRules = async (e: FormEvent) => {
    e.preventDefault();
    const baseCfg = (calBoard || board)?.settings;
    if (!baseCfg) return;
    setExtraBusy(true);
    setExtraError('');
    try {
      const nextRules = {
        ...baseCfg.rules,
        buffer: extraBuffer,
        breakStart: extraBreakStart,
        breakEnd: extraBreakEnd,
      };
      await publishConfigUpdate({ ...baseCfg, rules: nextRules });
      setExtraModalOpen(false);
      setNoticeTone('success');
      setNotice('Aturan waktu ekstra layanan dan jam istirahat berhasil diperbarui.');
    } catch (err) {
      setExtraError(errorMessage(err));
    } finally {
      setExtraBusy(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden || section === 'settings' || dirty) return;
      const next = jakartaToday();
      if (next !== currentDay) {
        setCurrentDay(next);
        if (fromDay === currentDay && toDay === currentDay) {
          setFromDay(next);
          setToDay(next);
          setDraftFrom(next);
          setDraftTo(next);
        }
      }
      void loadAll(fromDay, toDay, true);
    }, 20000);
    return () => clearInterval(timer);
  }, [fromDay, toDay, currentDay, section, dirty]);

  const applyPreset = (daysBack: number) => {
    const today = jakartaToday();
    const start = daysBack === 0 ? today : addDays(today, -daysBack);
    setCurrentDay(today);
    setDraftFrom(start);
    setDraftTo(today);
    setFromDay(start);
    setToDay(today);
  };

  const applyCustomPeriod = (e: FormEvent) => {
    e.preventDefault();
    setFromDay(draftFrom);
    setToDay(draftTo || draftFrom);
  };

  const submitFollowup = async (e: FormEvent, reservationId: string) => {
    e.preventDefault();
    const note = (followups[reservationId] || '').trim();
    if (!note) return;
    setFollowupBusy(reservationId);
    try {
      await api('/settlement/followup', { id: reservationId, note });
      setFollowups((prev) => ({ ...prev, [reservationId]: '' }));
      setNoticeTone('success');
      setNotice('Tindak lanjut feedback berhasil disimpan.');
      await loadReport(fromDay, toDay);
    } catch (err) {
      setNoticeTone('error');
      setNotice(errorMessage(err));
    } finally {
      setFollowupBusy(null);
    }
  };

  const saveDraft = async (e: FormEvent) => {
    e.preventDefault();
    if (!editConfig || !board) return;
    setSettingsBusy('draft');
    setNotice('');
    setConflicts([]);
    try {
      await api('/ops/draft', {
        version: board.settings.version,
        services: editConfig.services,
        capsters: editConfig.capsters,
        rules: editConfig.rules,
      });
      setDirty(false);
      setNoticeTone('success');
      setNotice('Draf tersimpan. Jalankan "Periksa konflik" sebelum menerapkannya.');
      await loadAll(fromDay, toDay, true);
    } catch (err) {
      setNoticeTone('error');
      setNotice(errorMessage(err));
    } finally {
      setSettingsBusy(null);
    }
  };

  const runDraftAction = async (action: 'validate' | 'publish') => {
    setSettingsBusy(action);
    setNotice('');
    setConflicts([]);
    try {
      const result = await api<{ conflicts?: Array<{ code: string; day: string }>; published?: boolean }>(
        `/ops/${action}`,
        {}
      );
      if (result.conflicts?.length) {
        setConflicts(result.conflicts);
        setNoticeTone('error');
        setNotice(`Ditemukan ${result.conflicts.length} reservasi aktif yang berbenturan dengan perubahan draf.`);
        return;
      }
      if (action === 'validate') {
        setNoticeTone('success');
        setNotice('Pemeriksaan selesai: tidak ada konflik dengan reservasi aktif.');
      } else {
        setDirty(false);
        setNoticeTone('success');
        setNotice('Pengaturan baru berhasil diterapkan.');
        await loadAll(fromDay, toDay, true);
      }
    } catch (err) {
      setNoticeTone('error');
      setNotice(errorMessage(err));
    } finally {
      setSettingsBusy(null);
    }
  };

  const rows = board?.rows || [];
  const capsterName = (id: string) => board?.settings.capsters.find((c) => c.id === id)?.name || id;
  const waitingCount = rows.filter((r) => r.visit_status === 'WAITING').length;
  const activeCount = rows.filter((r) => r.visit_status === 'ACTIVE').length;
  const lateCount = rows.filter((r) => (r.eta || r.started || 0) > r.start + 60000).length;

  // Build real operational chart data from board.rows / report
  const statusMap = new Map<string, number>();
  for (const r of rows) {
    const key = r.visit_status || r.status;
    statusMap.set(key, (statusMap.get(key) || 0) + 1);
  }
  const donutSegments =
    statusMap.size > 0
      ? [...statusMap.entries()].map(([key, count], idx) => ({
          label: STATUS_LABELS[key] || key,
          value: count,
          tone:
            key === 'CONFIRMED' || key === 'DONE'
              ? '#4b7a57'
              : key === 'REQUESTED'
                ? '#c47e3e'
                : key === 'ACTIVE'
                  ? '#3e6386'
                  : CHART_TONES[idx % CHART_TONES.length],
        }))
      : report?.statuses.map((s, idx) => ({
          label: STATUS_LABELS[s.status] || s.status,
          value: s.count,
          tone: CHART_TONES[idx % CHART_TONES.length],
        })) || [];

  const capsterWorkloadRows = (board?.settings.capsters || [])
    .filter((c) => c.active)
    .map((c) => {
      const capRows = rows.filter((r) => r.capster === c.id);
      const mins = capRows.reduce((sum, r) => sum + (r.booked_duration || 0), 0);
      return {
        label: c.name,
        value: mins,
        meta: `${capRows.length} jadwal · ${c.skills.length} keahlian`,
      };
    });

  // Service popularity from report.popular -> board.rows
  const boardServiceCounts = new Map<string, number>();
  for (const r of rows) {
    for (const item of r.items) {
      boardServiceCounts.set(item.name, (boardServiceCounts.get(item.name) || 0) + 1);
    }
  }
  const serviceChartFromReport = report?.popular.map((p) => ({ label: p.name, value: p.count })) || [];
  const serviceChartFromBoard = [...boardServiceCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8)
    .map(([name, count]) => ({ label: name, value: count }));

  const activeServiceRows = serviceChartFromReport.length
    ? serviceChartFromReport
    : serviceChartFromBoard;

  return (
    <>
      <PageHeader
        eyebrow="MANAJEMEN & OPERASIONAL"
        title={
          section === 'settings' ? (
            <>
              Pengaturan <em>salon.</em>
            </>
          ) : section === 'calendar' ? (
            <>
              Kalender &amp; <em>penjadwalan.</em>
            </>
          ) : (
            <>
              Ringkasan &amp; <em>laporan.</em>
            </>
          )
        }
        description={
          section === 'settings'
            ? 'Ubah jam operasional, katalog layanan, dan jadwal capster melalui alur draf dan validasi konflik.'
            : section === 'calendar'
              ? 'Atur shift tim, pasang blok waktu & jam istirahat, dan kelola waktu ekstra antarlayanan dalam satu tampilan kalender.'
              : 'Pantau kondisi operasional harian, grafik kapasitas, pembayaran tercatat, serta ulasan pelanggan.'
        }
        actions={
          <div className="m-segmented" role="tablist" aria-label="Mode manajemen">
            <button
              type="button"
              role="tab"
              aria-selected={section === 'overview'}
              className={`m-seg-btn ${section === 'overview' ? 'is-active' : ''}`}
              onClick={() => switchSection('overview')}
            >
              <BarChart3 size={15} /> Ringkasan &amp; Laporan
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={section === 'calendar'}
              className={`m-seg-btn ${section === 'calendar' ? 'is-active' : ''}`}
              onClick={() => switchSection('calendar')}
            >
              <CalendarDays size={15} /> Kalender &amp; Shift
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={section === 'settings'}
              className={`m-seg-btn ${section === 'settings' ? 'is-active' : ''}`}
              onClick={() => switchSection('settings')}
            >
              <Settings size={15} /> Pengaturan Salon
            </button>
          </div>
        }
      />

      <Notice text={notice} tone={noticeTone} />

      {section === 'overview' ? (
        <>
          <section className="m-toolbar-card" aria-label="Filter periode laporan">
            <div className="m-period-bar">
              <div>
                <span className="m-eyebrow">PERIODE AKTIF (WIB)</span>
                <p className="m-period-title">
                  {fromDay === currentDay && toDay === currentDay
                    ? `Hari ini · ${formatDayId(fromDay)}`
                    : `${formatDayId(fromDay)}${toDay !== fromDay ? ` s.d. ${formatDayId(toDay)}` : ''}`}
                </p>
              </div>
              <div className="m-preset-group">
                <button
                  type="button"
                  className={`m-chip ${fromDay === currentDay && toDay === currentDay ? 'is-active' : ''}`}
                  onClick={() => applyPreset(0)}
                >
                  Hari ini
                </button>
                <button
                  type="button"
                  className={`m-chip ${fromDay === addDays(currentDay, -6) && toDay === currentDay ? 'is-active' : ''}`}
                  onClick={() => applyPreset(6)}
                >
                  7 hari
                </button>
                <button
                  type="button"
                  className={`m-chip ${fromDay === addDays(currentDay, -29) && toDay === currentDay ? 'is-active' : ''}`}
                  onClick={() => applyPreset(29)}
                >
                  30 hari
                </button>
              </div>
            </div>

            <form className="m-period-form" onSubmit={applyCustomPeriod}>
              <label>
                Dari tanggal
                <input
                  type="date"
                  value={draftFrom}
                  onChange={(e) => setDraftFrom(e.target.value)}
                  max="9999-12-31"
                  required
                />
              </label>
              <label>
                Sampai tanggal (maks. 90 hari)
                <input
                  type="date"
                  value={draftTo}
                  onChange={(e) => setDraftTo(e.target.value)}
                  max="9999-12-31"
                  required
                />
              </label>
              <button type="submit" className="m-secondary">
                Terapkan periode
              </button>
              <button
                type="button"
                className="m-ghost-btn"
                onClick={() => void loadAll(fromDay, toDay)}
                disabled={refreshing}
              >
                <RefreshCw size={14} className={refreshing ? 'm-spin' : ''} />
                {refreshing ? 'Memperbarui…' : 'Muat ulang'}
              </button>
            </form>

            {lastUpdated && (
              <p className="m-updated">Diperbarui {formatTimeWib(lastUpdated)} · Zona waktu Asia/Jakarta.</p>
            )}
          </section>

          <section className="m-report-section">
            <div className="m-section-heading m-compact-head">
              <div>
                <span className="m-eyebrow">KONDISI OPERASIONAL</span>
                <h2>Snapshot antrean &amp; jadwal</h2>
              </div>
            </div>
            <div className="m-metrics-grid m-metrics-4">
              <MetricCard
                label="Total jadwal periode ini"
                value={rows.length}
                hint="Reservasi & walk-in"
                icon={<CalendarDays size={17} />}
              />
              <MetricCard
                label="Sedang menunggu"
                value={waitingCount}
                hint="Sudah check-in"
                tone={waitingCount > 0 ? 'accent' : 'default'}
                icon={<Clock3 size={17} />}
              />
              <MetricCard
                label="Sedang dilayani"
                value={activeCount}
                hint="Sesi aktif capster"
                tone={activeCount > 0 ? 'warning' : 'default'}
                icon={<Play size={17} />}
              />
              <MetricCard
                label="Mulai / est. terlambat (>1 mnt)"
                value={lateCount}
                hint="Berdasarkan estimasi board"
                tone={lateCount > 0 ? 'warning' : 'success'}
                icon={<CheckCircle2 size={17} />}
              />
            </div>

            {board && (
              <div className="m-charts-grid">
                {reportState === 'ready' && report && report.series.length > 1 ? (
                  <DailySeriesChart
                    title="Tren kunjungan harian"
                    subtitle="Jumlah kunjungan check-in pada rentang tanggal terpilih"
                    unitLabel="Kunjungan"
                    series={report.series.map((x) => ({
                      label: formatShortDayId(x.day),
                      value: x.visits,
                    }))}
                    formatValue={(v) => `${v} kunjungan`}
                  />
                ) : (
                  <HourlyScheduleChart
                    title="Distribusi jadwal per jam operasional"
                    subtitle="Sebaran jadwal masuk terhadap jam buka dan istirahat salon (WIB)"
                    rows={rows}
                    rules={board.settings.rules}
                  />
                )}

                <DonutBreakdownChart
                  title="Komposisi status jadwal"
                  subtitle="Proporsi reservasi dan kunjungan pada periode aktif"
                  centerLabel="Jadwal"
                  centerValue={rows.length}
                  segments={donutSegments}
                  formatValue={(v) => `${v} jadwal`}
                />

                <HorizontalMetricChart
                  title="Beban layanan per capster"
                  subtitle="Total menit layanan terjadwal per capster pada periode terpilih"
                  unitLabel="Menit layanan"
                  rows={capsterWorkloadRows}
                  formatValue={(v) => `${v} menit`}
                  barColor="#ad684f"
                />

                <HorizontalMetricChart
                  title="Layanan paling diminati"
                  subtitle="Frekuensi layanan dari jadwal dan kunjungan pada periode terpilih"
                  unitLabel="Permintaan"
                  rows={activeServiceRows}
                  formatValue={(v) => `${v}x`}
                  emptyMessage="Belum ada permintaan layanan tercatat pada periode terpilih."
                  barColor="#4b7a57"
                />
              </div>
            )}
          </section>

          <section className="m-report-section">
            <div className="m-section-heading m-compact-head">
              <div>
                <span className="m-eyebrow">LAPORAN PERIODE</span>
                <h2>Ringkasan layanan, pembayaran &amp; ulasan</h2>
              </div>
            </div>

            {reportState === 'loading' && (
              <div className="m-loading-box" role="status">
                Memuat data laporan periode…
              </div>
            )}

            {reportState === 'error' && <Notice text={`Laporan tidak dapat dimuat: ${reportMessage}`} />}

            {reportState === 'ready' && report && (
              <div className="m-stack-md">
                <div className="m-report-group">
                  <h3>1. Reservasi dan pelayanan</h3>
                  <div className="m-metrics-grid m-metrics-4">
                    <MetricCard label="Reservasi terkonfirmasi" value={report.counts.reservations} hint="Sesuai tanggal kunjungan" />
                    <MetricCard label="Total kunjungan" value={report.counts.visits} hint="Sudah check-in" />
                    <MetricCard label="Pelanggan walk-in" value={report.counts.walkins} hint="Penerimaan langsung" />
                    <MetricCard label="Pelayanan selesai" value={report.counts.finished} hint="Status DONE" tone="success" />
                  </div>
                </div>

                <div className="m-report-group">
                  <h3>2. Tagihan dan pembayaran tercatat</h3>
                  <div className="m-metrics-grid m-metrics-5">
                    <MetricCard label="Tagihan dibuat" value={report.invoices.count} hint="Pada periode ini" />
                    <MetricCard
                      label="Tagihan belum lunas"
                      value={report.invoices.unpaid_count}
                      hint="Status terkini"
                      tone={report.invoices.unpaid_count > 0 ? 'warning' : 'default'}
                    />
                    <MetricCard
                      label="Nilai belum lunas"
                      value={money.format(Number(report.invoices.unpaid_total) || 0)}
                      hint="Menunggu pelunasan"
                    />
                    <MetricCard label="Pembayaran lunas" value={report.payments.count} hint="Transaksi tercatat" />
                    <MetricCard
                      label="Total pembayaran tercatat"
                      value={money.format(Number(report.payments.total) || 0)}
                      hint="Bukan laba/margin bersih"
                      tone="success"
                    />
                  </div>
                </div>

                <div className="m-report-group">
                  <h3>3. Ulasan pelanggan</h3>
                  <div className="m-metrics-grid m-metrics-2">
                    <MetricCard label="Jumlah feedback masuk" value={report.feedback.count} hint="Sukarela setelah lunas" />
                    <MetricCard
                      label="Rata-rata rating"
                      value={report.feedback.average ? `${report.feedback.average.toFixed(1)} / 5` : '—'}
                      hint="Skala 1 hingga 5"
                      tone="accent"
                    />
                  </div>
                </div>

                {report.series.length > 1 && (
                  <div className="m-charts-grid">
                    <DailySeriesChart
                      title="Pembayaran lunas per hari"
                      subtitle="Total nominal pembayaran tercatat per hari (WIB) — bukan laba bersih"
                      unitLabel="Rupiah (IDR)"
                      series={report.series.map((x) => ({
                        label: formatShortDayId(x.day),
                        value: Number(x.paid_total) || 0,
                      }))}
                      formatValue={(v) => money.format(v)}
                      tone="sage"
                    />
                    <DonutBreakdownChart
                      title="Metode pembayaran tercatat"
                      subtitle="Distribusi nominal berdasarkan metode pembayaran"
                      centerLabel="Transaksi"
                      centerValue={report.payments.count}
                      segments={report.methods.map((m, idx) => ({
                        label: PAYMENT_METHOD_LABELS[m.method] || m.method,
                        value: Number(m.total) || 0,
                        tone: CHART_TONES[idx % CHART_TONES.length],
                      }))}
                      formatValue={(v) => money.format(v)}
                    />
                  </div>
                )}

                <div className="m-breakdown-grid">
                  <div className="m-detail-panel">
                    <h4>Status reservasi</h4>
                    <p className="m-muted">
                      {report.statuses.length
                        ? report.statuses.map((x) => `${STATUS_LABELS[x.status] || x.status}: ${x.count}`).join(' · ')
                        : 'Belum ada data status.'}
                    </p>
                  </div>
                  <div className="m-detail-panel">
                    <h4>Distribusi rating</h4>
                    <p className="m-muted">
                      {report.ratings.length
                        ? report.ratings.map((x) => `${x.rating}/5: ${x.count} ulasan`).join(' · ')
                        : 'Belum ada ulasan.'}
                    </p>
                  </div>
                  <div className="m-detail-panel">
                    <h4>Metode pembayaran tercatat</h4>
                    <p className="m-muted">
                      {report.methods.length
                        ? report.methods
                            .map(
                              (x) =>
                                `${PAYMENT_METHOD_LABELS[x.method] || x.method}: ${money.format(Number(x.total) || 0)}`
                            )
                            .join(' · ')
                        : 'Belum ada pembayaran.'}
                    </p>
                  </div>
                </div>

                <p className="m-methodology-note">
                  <strong>Catatan metodologi:</strong> Reservasi dan kunjungan dihitung menurut tanggal kunjungan; tagihan,
                  pembayaran, dan feedback dihitung menurut waktu pencatatan (WIB). Total pembayaran hanya mencakup
                  pembayaran lunas tercatat dan tidak menghitung biaya operasional maupun laba.
                </p>

                <div className="m-report-group">
                  <h3>Feedback pelanggan terbaru</h3>
                  {report.comments.length === 0 ? (
                    <EmptyState
                      icon={<MessageSquare size={22} />}
                      title="Belum ada feedback pada periode ini"
                      description="Ulasan pelanggan muncul setelah kunjungan selesai dan pembayaran dicatat lunas."
                    />
                  ) : (
                    <div className="m-feedback-grid">
                      {report.comments.map((f) => (
                        <article className="m-feedback-card" key={f.reservation}>
                          <div className="m-feedback-top">
                            <span className="m-pill is-accent">{f.rating} / 5</span>
                            <small className="m-muted">{date.format(f.created)}</small>
                          </div>
                          <p className="m-feedback-body">{f.comment || 'Tanpa komentar tertulis.'}</p>
                          {Boolean(f.followups?.length) && (
                            <div className="m-followup-list">
                              {f.followups?.map((fu, i) => (
                                <p key={i}>
                                  <strong>Tindak lanjut:</strong> {fu.note}
                                </p>
                              ))}
                            </div>
                          )}
                          <form
                            className="m-followup-form"
                            onSubmit={(e) => void submitFollowup(e, f.reservation)}
                          >
                            <label>
                              Catat tindak lanjut
                              <textarea
                                rows={2}
                                maxLength={1000}
                                value={followups[f.reservation] || ''}
                                onChange={(e) =>
                                  setFollowups((prev) => ({ ...prev, [f.reservation]: e.target.value }))
                                }
                                placeholder="Tambahkan catatan tindak lanjut tim…"
                                required
                              />
                            </label>
                            <button
                              type="submit"
                              className="m-secondary m-btn-sm"
                              disabled={followupBusy === f.reservation}
                            >
                              {followupBusy === f.reservation ? 'Menyimpan…' : 'Simpan tindak lanjut'}
                            </button>
                          </form>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>

          <section className="m-report-section">
            <div className="m-section-heading m-compact-head">
              <div>
                <span className="m-eyebrow">AKTIVITAS PERIODE</span>
                <h2>Daftar jadwal &amp; kunjungan ({rows.length})</h2>
              </div>
            </div>
            {loading ? (
              <div className="m-loading-box" role="status">
                Memuat aktivitas periode…
              </div>
            ) : rows.length === 0 ? (
              <EmptyState
                icon={<Clock3 size={24} />}
                title="Belum ada aktivitas pada periode ini"
                description="Pilih rentang tanggal lain untuk meninjau reservasi atau kunjungan."
              />
            ) : (
              <div className="m-stack-sm">
                {rows.map((r) => (
                  <article className="m-ops-card" key={r.id}>
                    <div className="m-ops-card-main">
                      <div className="m-ops-card-top">
                        <div className="m-card-badges">
                          <StatusBadge status={r.visit_status || r.status} />
                          {r.channel && <StatusBadge status={r.channel} variant="channel" />}
                        </div>
                        {r.code && <span className="m-code-chip">{r.code}</span>}
                      </div>
                      <div className="m-ops-card-title">
                        <h3>{r.name}</h3>
                        <span>Capster {capsterName(r.capster)}</span>
                      </div>
                      <p className="m-ops-meta">
                        <strong>{time.format(r.start)} WIB</strong> · {date.format(r.start)} ·{' '}
                        {r.items.map((i) => i.name).join(' + ')} · <strong>{money.format(r.booked_price)}</strong>
                      </p>
                    </div>
                    {r.ticket && (
                      <div className="m-ops-card-side">
                        <div className="m-ticket-box">
                          <span className="m-eyebrow">ANTREAN</span>
                          <strong>#{r.ticket}</strong>
                          <small>Tiba {formatTimeWib(r.arrived)}</small>
                          {r.eta && <small>Est. {formatTimeWib(r.eta)}</small>}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      ) : section === 'calendar' ? (
        <div className="m-stack-md">
          {(() => {
            const activeCalBoard = calBoard || board;
            const calCapsters = activeCalBoard?.settings.capsters || [];
            const activeRules = activeCalBoard?.settings.rules;
            const activeBlocksCount = (activeCalBoard?.settings.blocks || []).filter(
              (b) => b.day >= currentDay
            ).length;
            return (
              <>
                <section className="m-smart-grid" aria-label="Penjadwalan cerdas tim">
                  <div className="m-smart-card">
                    <div className="m-smart-icon" aria-hidden="true">
                      <Users size={18} />
                    </div>
                    <div className="m-smart-body">
                      <strong>Jadwalkan shift</strong>
                      <p>Atur jam kerja &amp; hari libur mingguan tim capster secara terpadu.</p>
                    </div>
                    {calCapsters[0] && (
                      <button
                        type="button"
                        className="m-secondary m-btn-sm"
                        onClick={() => openShiftEditor(calCapsters[0])}
                      >
                        Atur shift
                      </button>
                    )}
                  </div>

                  <div className="m-smart-card">
                    <div className="m-smart-icon" aria-hidden="true">
                      <Coffee size={18} />
                    </div>
                    <div className="m-smart-body">
                      <strong>Blok waktu &amp; jam istirahat</strong>
                      <p>
                        {activeBlocksCount > 0
                          ? `${activeBlocksCount} blok aktif tercatat mencegah pemesanan bentrok.`
                          : 'Tambahkan istirahat, pelatihan, atau waktu terpesan dalam detik.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="m-secondary m-btn-sm"
                      onClick={() => {
                        setBlockCapster(calCapsters.find((c) => c.active)?.id || 'a');
                        setBlockDay(calDay);
                        setBlockStartMin(undefined);
                        setBlockOpen(true);
                      }}
                    >
                      + Blok waktu
                    </button>
                  </div>

                  <div className="m-smart-card">
                    <div className="m-smart-icon" aria-hidden="true">
                      <Timer size={18} />
                    </div>
                    <div className="m-smart-body">
                      <strong>Waktu ekstra layanan</strong>
                      <p>
                        {activeRules
                          ? `Jeda antarsesi ${activeRules.buffer} mnt · Istirahat ${String(activeRules.breakStart).padStart(2, '0')}:00–${String(activeRules.breakEnd).padStart(2, '0')}:00 WIB`
                          : 'Atur waktu persiapan & jeda realistis antarlayanan.'}
                      </p>
                    </div>
                    <button type="button" className="m-secondary m-btn-sm" onClick={openExtraEditor}>
                      Ubah jeda
                    </button>
                  </div>
                </section>

                <CalendarToolbar
                  day={calDay}
                  todayDay={currentDay}
                  viewMode={calViewMode}
                  onChangeDay={setCalDay}
                  onChangeViewMode={setCalViewMode}
                  onAddBlock={() => {
                    setBlockCapster(calCapsters.find((c) => c.active)?.id || 'a');
                    setBlockDay(calDay);
                    setBlockStartMin(undefined);
                    setBlockOpen(true);
                  }}
                />

                {calLoading && !calBoard ? (
                  <div className="m-loading-box" role="status">
                    Memuat kalender &amp; shift tim…
                  </div>
                ) : activeCalBoard ? (
                  calViewMode === 'DAY' ? (
                    <DayResourceCalendar
                      day={calDay}
                      todayDay={currentDay}
                      capsters={calCapsters.filter((c) => c.active)}
                      rows={activeCalBoard.rows}
                      blocks={activeCalBoard.settings.blocks || []}
                      rules={activeCalBoard.settings.rules}
                      onSelectAppointment={setCalAppointment}
                      onEditShift={openShiftEditor}
                      onAddBlock={(capId, sMin) => {
                        setBlockCapster(capId);
                        setBlockDay(calDay);
                        setBlockStartMin(sMin);
                        setBlockOpen(true);
                      }}
                      onSelectBlock={setBlockTarget}
                    />
                  ) : (
                    <WeekTeamMatrix
                      startDay={calDay}
                      todayDay={currentDay}
                      capsters={calCapsters.filter((c) => c.active)}
                      rows={activeCalBoard.rows}
                      blocks={activeCalBoard.settings.blocks || []}
                      rules={activeCalBoard.settings.rules}
                      onSelectDay={(selectedDay) => {
                        setCalDay(selectedDay);
                        setCalViewMode('DAY');
                      }}
                      onEditShift={openShiftEditor}
                      onAddBlock={(capId, targetDay) => {
                        setBlockCapster(capId);
                        setBlockDay(targetDay);
                        setBlockStartMin(undefined);
                        setBlockOpen(true);
                      }}
                    />
                  )
                ) : null}

                <AppointmentQuickSheet
                  appointment={calAppointment}
                  capsters={calCapsters}
                  onClose={() => setCalAppointment(null)}
                />

                <BlockTimeModal
                  open={blockOpen}
                  onOpenChange={setBlockOpen}
                  capsters={calCapsters.filter((c) => c.active)}
                  initialCapster={blockCapster}
                  initialDay={blockDay}
                  initialStartMin={blockStartMin}
                  minDay={currentDay}
                  onCreated={() => loadCalendar(calDay, calViewMode, true)}
                />

                <BlockDetailModal
                  block={blockTarget}
                  capsters={calCapsters}
                  canDelete={true}
                  onClose={() => setBlockTarget(null)}
                  onDeleted={() => loadCalendar(calDay, calViewMode, true)}
                />

                <Modal
                  open={shiftModalOpen}
                  onOpenChange={setShiftModalOpen}
                  title="Jadwalkan shift capster"
                  description="Ubah jam kerja harian dan hari libur mingguan. Perubahan divalidasi terhadap reservasi aktif sebelum diterapkan."
                >
                  <form className="m-form" onSubmit={submitShiftEdit}>
                    <label>
                      Pilih capster
                      <select
                        value={shiftTargetId}
                        onChange={(e) => {
                          const target = calCapsters.find((c) => c.id === e.target.value);
                          setShiftTargetId(e.target.value);
                          if (target) {
                            setShiftStart(target.start);
                            setShiftEnd(target.end);
                            setShiftOff(target.off);
                            setShiftActive(target.active);
                          }
                        }}
                      >
                        {calCapsters.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="m-grid-two">
                      <label>
                        Jam mulai (WIB)
                        <input
                          type="number"
                          min={0}
                          max={23}
                          value={shiftStart}
                          onChange={(e) => setShiftStart(Number(e.target.value))}
                          required
                        />
                      </label>
                      <label>
                        Jam selesai (WIB)
                        <input
                          type="number"
                          min={1}
                          max={24}
                          value={shiftEnd}
                          onChange={(e) => setShiftEnd(Number(e.target.value))}
                          required
                        />
                      </label>
                    </div>
                    <label>
                      Hari libur mingguan
                      <select value={shiftOff} onChange={(e) => setShiftOff(Number(e.target.value))}>
                        {DAYS_OF_WEEK.map((d) => (
                          <option key={d.value} value={d.value}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="m-checkbox-row">
                      <input
                        type="checkbox"
                        checked={shiftActive}
                        onChange={(e) => setShiftActive(e.target.checked)}
                      />
                      <span>Capster aktif melayani reservasi</span>
                    </label>
                    <Notice text={shiftError} />
                    <div className="m-actions">
                      <button type="submit" className="m-primary" disabled={shiftBusy}>
                        {shiftBusy ? 'Memvalidasi & menyimpan…' : 'Simpan & terapkan shift'}
                      </button>
                      <button type="button" className="m-secondary" onClick={() => setShiftModalOpen(false)}>
                        Batal
                      </button>
                    </div>
                  </form>
                </Modal>

                <Modal
                  open={extraModalOpen}
                  onOpenChange={setExtraModalOpen}
                  title="Waktu ekstra layanan &amp; jam istirahat"
                  description="Tetapkan jeda standar persiapan antarlayanan serta rentang jam istirahat salon harian."
                >
                  <form className="m-form" onSubmit={submitExtraRules}>
                    <label>
                      Waktu ekstra / jeda antarlayanan (menit)
                      <input
                        type="number"
                        min={0}
                        max={120}
                        value={extraBuffer}
                        onChange={(e) => setExtraBuffer(Number(e.target.value))}
                        required
                      />
                    </label>
                    <div className="m-grid-two">
                      <label>
                        Mulai jam istirahat salon (WIB)
                        <input
                          type="number"
                          min={0}
                          max={24}
                          value={extraBreakStart}
                          onChange={(e) => setExtraBreakStart(Number(e.target.value))}
                          required
                        />
                      </label>
                      <label>
                        Selesai jam istirahat salon (WIB)
                        <input
                          type="number"
                          min={0}
                          max={24}
                          value={extraBreakEnd}
                          onChange={(e) => setExtraBreakEnd(Number(e.target.value))}
                          required
                        />
                      </label>
                    </div>
                    <Notice text={extraError} />
                    <div className="m-actions">
                      <button type="submit" className="m-primary" disabled={extraBusy}>
                        {extraBusy ? 'Memvalidasi & menyimpan…' : 'Simpan & terapkan aturan'}
                      </button>
                      <button type="button" className="m-secondary" onClick={() => setExtraModalOpen(false)}>
                        Batal
                      </button>
                    </div>
                  </form>
                </Modal>
              </>
            );
          })()}
        </div>
      ) : (
        <section className="m-settings-wrap">
          {!editConfig || !board ? (
            <div className="m-loading-box" role="status">
              Memuat konfigurasi salon…
            </div>
          ) : (
            <form onSubmit={saveDraft}>
              <div className="m-draft-bar">
                <div className="m-draft-status">
                  <span className="m-pill is-neutral">Versi aktif v{board.settings.version}</span>
                  {board.draft ? (
                    <span className="m-pill is-warning">Draf tersimpan (belum diterapkan)</span>
                  ) : (
                    <span className="m-muted">Belum ada draf tertunda</span>
                  )}
                  {dirty && <span className="m-pill is-accent">Perubahan belum disimpan ke draf</span>}
                </div>
                <div className="m-draft-actions">
                  <button type="submit" className="m-secondary" disabled={settingsBusy !== null}>
                    <Save size={15} />
                    {settingsBusy === 'draft' ? 'Menyimpan…' : '1. Simpan draf'}
                  </button>
                  <button
                    type="button"
                    className="m-secondary"
                    disabled={settingsBusy !== null || !board.draft}
                    title={!board.draft ? 'Simpan draf terlebih dahulu' : undefined}
                    onClick={() => void runDraftAction('validate')}
                  >
                    <ShieldCheck size={15} />
                    {settingsBusy === 'validate' ? 'Memeriksa…' : '2. Periksa konflik'}
                  </button>
                  <button
                    type="button"
                    className="m-primary"
                    disabled={settingsBusy !== null || !board.draft}
                    title={!board.draft ? 'Simpan dan periksa draf terlebih dahulu' : undefined}
                    onClick={() => void runDraftAction('publish')}
                  >
                    <UploadCloud size={15} />
                    {settingsBusy === 'publish' ? 'Menerapkan…' : '3. Terapkan pengaturan'}
                  </button>
                </div>
              </div>

              {conflicts.length > 0 && (
                <div className="m-info-card is-danger" role="alert">
                  <AlertTriangle size={20} />
                  <div>
                    <strong>Konflik terdeteksi pada reservasi aktif</strong>
                    <p>
                      Revisi draf sebelum menerapkan:{' '}
                      {conflicts.map((c) => `${c.code} (${c.day})`).join(', ')}.
                    </p>
                  </div>
                </div>
              )}

              <div className="m-filter-pills" role="tablist" aria-label="Kategori pengaturan">
                {(
                  [
                    ['rules', 'Jam & Aturan Penerimaan'],
                    ['services', `Katalog Layanan (${editConfig.services.length})`],
                    ['capsters', `Capster & Kompetensi (${editConfig.capsters.length})`],
                  ] as const
                ).map(([k, label]) => (
                  <button
                    key={k}
                    type="button"
                    role="tab"
                    aria-selected={settingsTab === k}
                    className={`m-chip ${settingsTab === k ? 'is-active' : ''}`}
                    onClick={() => setSettingsTab(k)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {settingsTab === 'rules' && (
                <div className="m-settings-card">
                  <h2>Jam salon dan aturan penerimaan</h2>
                  <p className="m-muted">
                    Perubahan diterapkan setelah draf disimpan, diperiksa konfliknya, dan dipublikasikan.
                  </p>
                  <div className="m-settings-grid">
                    {RULES_FIELDS.map((f) => (
                      <label key={f.key}>
                        <span>{f.label}</span>
                        <input
                          type="number"
                          min={f.min}
                          max={f.max}
                          value={editConfig.rules[f.key]}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setDirty(true);
                            setEditConfig((prev) =>
                              prev ? { ...prev, rules: { ...prev.rules, [f.key]: val } } : prev
                            );
                          }}
                          required
                        />
                        <small className="m-muted">{f.unit}</small>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {settingsTab === 'services' && (
                <div className="m-settings-list">
                  {editConfig.services.map((s, idx) => (
                    <fieldset className="m-settings-card" key={s.id}>
                      <legend>{s.name}</legend>
                      <div className="m-settings-grid">
                        <label>
                          Nama layanan
                          <input
                            value={s.name}
                            minLength={2}
                            maxLength={80}
                            required
                            onChange={(e) => {
                              const val = e.target.value;
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      services: prev.services.map((item, i) =>
                                        i === idx ? { ...item, name: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                        </label>
                        <label>
                          Harga (Rp)
                          <input
                            type="number"
                            min={0}
                            max={100000000}
                            required
                            value={s.price}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      services: prev.services.map((item, i) =>
                                        i === idx ? { ...item, price: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                        </label>
                        <label>
                          Durasi (menit)
                          <input
                            type="number"
                            min={15}
                            max={480}
                            required
                            value={s.duration}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      services: prev.services.map((item, i) =>
                                        i === idx ? { ...item, duration: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                        </label>
                        <label className="m-checkbox-row m-align-end">
                          <input
                            type="checkbox"
                            checked={s.active}
                            onChange={(e) => {
                              const val = e.target.checked;
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      services: prev.services.map((item, i) =>
                                        i === idx ? { ...item, active: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                          <span>Layanan aktif di katalog</span>
                        </label>
                      </div>
                    </fieldset>
                  ))}
                </div>
              )}

              {settingsTab === 'capsters' && (
                <div className="m-settings-list">
                  {editConfig.capsters.map((c, idx) => (
                    <fieldset className="m-settings-card" key={c.id}>
                      <legend>{c.name}</legend>
                      <div className="m-settings-grid">
                        <label>
                          Nama capster
                          <input
                            value={c.name}
                            minLength={2}
                            maxLength={80}
                            required
                            onChange={(e) => {
                              const val = e.target.value;
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      capsters: prev.capsters.map((item, i) =>
                                        i === idx ? { ...item, name: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                        </label>
                        <label>
                          Jam mulai (WIB)
                          <input
                            type="number"
                            min={0}
                            max={23}
                            required
                            value={c.start}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      capsters: prev.capsters.map((item, i) =>
                                        i === idx ? { ...item, start: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                        </label>
                        <label>
                          Jam selesai (WIB)
                          <input
                            type="number"
                            min={1}
                            max={24}
                            required
                            value={c.end}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      capsters: prev.capsters.map((item, i) =>
                                        i === idx ? { ...item, end: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                        </label>
                        <label>
                          Hari libur mingguan
                          <select
                            value={c.off}
                            onChange={(e) => {
                              const val = Number(e.target.value);
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      capsters: prev.capsters.map((item, i) =>
                                        i === idx ? { ...item, off: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          >
                            {DAYS_OF_WEEK.map((d) => (
                              <option key={d.value} value={d.value}>
                                {d.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="m-checkbox-row m-align-end">
                          <input
                            type="checkbox"
                            checked={c.active}
                            onChange={(e) => {
                              const val = e.target.checked;
                              setDirty(true);
                              setEditConfig((prev) =>
                                prev
                                  ? {
                                      ...prev,
                                      capsters: prev.capsters.map((item, i) =>
                                        i === idx ? { ...item, active: val } : item
                                      ),
                                    }
                                  : prev
                              );
                            }}
                          />
                          <span>Capster aktif</span>
                        </label>
                      </div>

                      <div className="m-skills-box">
                        <span className="m-field-label">Kompetensi layanan</span>
                        <div className="m-skills-grid">
                          {editConfig.services.map((s) => {
                            const hasSkill = c.skills.includes(s.id);
                            return (
                              <label className="m-checkbox-row" key={s.id}>
                                <input
                                  type="checkbox"
                                  checked={hasSkill}
                                  onChange={(e) => {
                                    const checked = e.target.checked;
                                    setDirty(true);
                                    setEditConfig((prev) =>
                                      prev
                                        ? {
                                            ...prev,
                                            capsters: prev.capsters.map((item, i) => {
                                              if (i !== idx) return item;
                                              const skills = checked
                                                ? [...new Set([...item.skills, s.id])]
                                                : item.skills.filter((id) => id !== s.id);
                                              return { ...item, skills };
                                            }),
                                          }
                                        : prev
                                    );
                                  }}
                                />
                                <span>{s.name}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </fieldset>
                  ))}
                </div>
              )}
            </form>
          )}
        </section>
      )}
    </>
  );
}

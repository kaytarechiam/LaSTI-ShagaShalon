import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock3,
  Play,
  RefreshCw,
  Scissors,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import {
  addDays,
  api,
  date,
  errorMessage,
  formatTimeWib,
  jakartaToday,
  money,
  time,
  type OpsBoardResponse,
  type Reservation,
} from './api';
import { HourlyScheduleChart } from './components/Charts';
import { EmptyState, MetricCard, Modal, Notice, PageHeader, StatusBadge } from './components/ui';

export function CapsterView() {
  const [currentDay, setCurrentDay] = useState(jakartaToday);
  const [day, setDay] = useState(currentDay);
  const [board, setBoard] = useState<OpsBoardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);
  const [notice, setNotice] = useState('');
  const [noticeTone, setNoticeTone] = useState<'error' | 'success'>('success');
  const [busyKey, setBusyKey] = useState<string | null>(null);

  const [minutesInput, setMinutesInput] = useState<Record<string, string>>({});

  const [adjustTarget, setAdjustTarget] = useState<Reservation | null>(null);
  const [adjustService, setAdjustService] = useState('');
  const [adjustCapster, setAdjustCapster] = useState('');
  const [adjustApproved, setAdjustApproved] = useState(false);
  const [adjustError, setAdjustError] = useState('');
  const [adjustBusy, setAdjustBusy] = useState(false);

  const autoAdvancedRef = useRef(false);
  const skipNextFetchRef = useRef(false);

  const loadBoard = async (targetDay = day, silent = false) => {
    if (!silent) setRefreshing(true);
    try {
      const data = await api<OpsBoardResponse>('/ops/board?' + new URLSearchParams({ day: targetDay, to: targetDay }));
      if (!autoAdvancedRef.current) {
        autoAdvancedRef.current = true;
        if (targetDay === currentDay && data.rows.length === 0) {
          const nextDay = addDays(currentDay, 1);
          const nextData = await api<OpsBoardResponse>('/ops/board?' + new URLSearchParams({ day: nextDay, to: nextDay }));
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
    void loadBoard(day);
  }, [day]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden || adjustTarget) return;
      const next = jakartaToday();
      if (next !== currentDay) {
        setCurrentDay(next);
        if (day === currentDay) setDay(next);
      }
      void loadBoard(day, true);
    }, 20000);
    return () => clearInterval(timer);
  }, [day, currentDay, adjustTarget]);

  const toggleReady = async () => {
    if (!board) return;
    setBusyKey('ready');
    setNotice('');
    try {
      await api('/ops/ready', { ready: !board.ready });
      setNoticeTone('success');
      setNotice(!board.ready ? 'Status diubah menjadi siap menerima pelanggan.' : 'Status diubah menjadi belum siap.');
      await loadBoard(day, true);
    } catch (e) {
      setNoticeTone('error');
      setNotice(errorMessage(e));
    } finally {
      setBusyKey(null);
    }
  };

  const sessionAction = async (action: 'start' | 'finish', row: Reservation) => {
    setBusyKey(`${action}:${row.id}`);
    setNotice('');
    try {
      await api(`/ops/${action}`, { id: row.id });
      setNoticeTone('success');
      setNotice(action === 'start' ? `Sesi untuk ${row.name} dimulai.` : `Sesi untuk ${row.name} selesai.`);
      await loadBoard(day, true);
    } catch (e) {
      setNoticeTone('error');
      setNotice(errorMessage(e));
    } finally {
      setBusyKey(null);
    }
  };

  const updateEstimate = async (e: FormEvent, row: Reservation, overrideMinutes?: number) => {
    e.preventDefault();
    const mins = overrideMinutes ?? Number(minutesInput[row.id]);
    if (!mins) return;
    setBusyKey(`estimate:${row.id}`);
    setNotice('');
    try {
      await api('/ops/estimate', { id: row.id, minutes: mins });
      setNoticeTone('success');
      setNotice(`Perkiraan sisa waktu ${row.name} diperbarui menjadi ${mins} menit.`);
      setMinutesInput((prev) => ({ ...prev, [row.id]: '' }));
      await loadBoard(day, true);
    } catch (err) {
      setNoticeTone('error');
      setNotice(errorMessage(err));
    } finally {
      setBusyKey(null);
    }
  };

  const openAdjust = (row: Reservation) => {
    setAdjustTarget(row);
    setAdjustService(row.service || row.items[0]?.id || '');
    setAdjustCapster(row.capster);
    setAdjustApproved(false);
    setAdjustError('');
  };

  const submitAdjust = async (e: FormEvent) => {
    e.preventDefault();
    if (!adjustTarget) return;
    setAdjustBusy(true);
    setAdjustError('');
    try {
      await api('/ops/adjust', {
        id: adjustTarget.id,
        service: adjustService,
        capster: adjustCapster,
        approved: adjustApproved,
      });
      setAdjustTarget(null);
      setNoticeTone('success');
      setNotice('Penyesuaian layanan hasil konsultasi berhasil diterapkan.');
      await loadBoard(day, true);
    } catch (err) {
      setAdjustError(errorMessage(err));
    } finally {
      setAdjustBusy(false);
    }
  };

  const capsterProfile = board?.settings.capsters.find((c) => c.id === board.mine);
  const capsterName = capsterProfile?.name || board?.mine || 'Capster';

  const rows = board?.rows || [];
  const activeSession = rows.find((r) => r.day === currentDay && r.visit_status === 'ACTIVE');
  const waitingRows = rows.filter((r) => r.visit_status === 'WAITING');
  const doneRows = rows.filter((r) => r.visit_status === 'DONE');

  return (
    <>
      <PageHeader
        eyebrow="RUANG KERJA CAPSTER"
        title={
          <>
            Jadwal <em>pelayanan.</em>
          </>
        }
        description="Lihat giliran pelangganmu, atur kesiapan layanan, perbarui sisa waktu, dan catat penyelesaian sesi."
        actions={
          <button
            type="button"
            className={board?.ready ? 'm-secondary' : 'm-primary'}
            disabled={!board || busyKey === 'ready'}
            onClick={() => void toggleReady()}
          >
            {board?.ready ? 'Tandai belum siap' : 'Tandai siap melayani'}
          </button>
        }
      />

      {board && (
        <section className={`m-ready-banner ${board.ready ? 'is-ready' : 'is-paused'}`}>
          <div className="m-ready-copy">
            <div className="m-ready-icon" aria-hidden="true">
              <Scissors size={20} />
            </div>
            <div>
              <strong>{capsterName}</strong>
              <p>
                {board.ready
                  ? 'Status aktif: Siap menerima pelanggan berikutnya.'
                  : 'Status saat ini: Belum siap. Tandai siap sebelum memulai sesi.'}
              </p>
            </div>
          </div>
          <span className={`m-pill ${board.ready ? 'is-success' : 'is-warning'}`}>
            <span className="m-pill-dot" aria-hidden="true" />
            {board.ready ? 'Siap melayani' : 'Belum siap'}
          </span>
        </section>
      )}

      <div className="m-metrics-grid m-metrics-3">
        <MetricCard
          label="Menunggu giliran"
          value={waitingRows.length}
          hint="Sudah check-in"
          tone={waitingRows.length > 0 ? 'accent' : 'default'}
          icon={<Clock3 size={17} />}
        />
        <MetricCard
          label="Sedang dilayani"
          value={activeSession ? 1 : 0}
          hint={activeSession ? activeSession.name : 'Tidak ada sesi aktif'}
          tone={activeSession ? 'warning' : 'default'}
          icon={<Play size={17} />}
        />
        <MetricCard
          label="Selesai pada tanggal ini"
          value={doneRows.length}
          hint={`${day} (WIB)`}
          tone="success"
          icon={<CheckCircle2 size={17} />}
        />
      </div>

      <section className="m-toolbar-card">
        <div className="m-toolbar-inline">
          <label>
            Tanggal jadwal
            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              max="9999-12-31"
            />
          </label>
          <div className="m-toolbar-foot">
            <p className="m-updated" role="status">
              {lastUpdated
                ? `Diperbarui ${formatTimeWib(lastUpdated)} · Estimasi dapat berubah.`
                : 'Memuat jadwal…'}
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
        </div>
      </section>

      {board && (
        <div className="m-capster-chart-wrap">
          <HourlyScheduleChart
            title="Peta jadwal shift hari ini"
            subtitle={`Jam layanan ${capsterName} pada ${day} (WIB)`}
            rows={rows}
            rules={board.settings.rules}
            workStart={capsterProfile?.start}
            workEnd={capsterProfile?.end}
          />
        </div>
      )}

      <Notice text={notice} tone={noticeTone} />

      {activeSession && (
        <section className="m-spotlight-card" aria-label="Sesi sedang berlangsung">
          <div className="m-spotlight-head">
            <div>
              <span className="m-eyebrow">SEDANG BERLANGSUNG · ANTREAN #{activeSession.ticket}</span>
              <h2>{activeSession.name}</h2>
              <p>
                {activeSession.items.map((i) => i.name).join(' + ')} · Mulai {formatTimeWib(activeSession.started)} ·
                Perkiraan selesai {formatTimeWib(activeSession.estimate)}
              </p>
            </div>
            <button
              type="button"
              className="m-primary"
              disabled={busyKey === `finish:${activeSession.id}`}
              onClick={() => void sessionAction('finish', activeSession)}
            >
              <CheckCircle2 size={17} />
              {busyKey === `finish:${activeSession.id}` ? 'Menyelesaikan…' : 'Selesaikan sesi'}
            </button>
          </div>

          <form className="m-estimate-bar" onSubmit={(e) => void updateEstimate(e, activeSession)}>
            <div className="m-preset-row">
              <span>Perbarui sisa waktu cepat:</span>
              {[10, 15, 30, 45].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  className="m-chip"
                  disabled={busyKey === `estimate:${activeSession.id}`}
                  onClick={(e) => void updateEstimate(e, activeSession, mins)}
                >
                  {mins} mnt
                </button>
              ))}
            </div>
            <div className="m-estimate-custom">
              <label>
                Atau isi manual (menit)
                <input
                  type="number"
                  min={1}
                  max={480}
                  step={1}
                  value={minutesInput[activeSession.id] || ''}
                  onChange={(e) =>
                    setMinutesInput((prev) => ({ ...prev, [activeSession.id]: e.target.value }))
                  }
                  placeholder="Contoh: 20"
                  required
                />
              </label>
              <button
                type="submit"
                className="m-secondary"
                disabled={busyKey === `estimate:${activeSession.id}`}
              >
                Perbarui estimasi
              </button>
            </div>
          </form>
        </section>
      )}

      {loading ? (
        <div className="m-loading-box" role="status">
          Memuat jadwal capster…
        </div>
      ) : rows.length === 0 ? (
        <EmptyState
          icon={<Sparkles size={25} strokeWidth={1.5} />}
          title="Belum ada jadwal pada tanggal ini"
          description="Pilih tanggal lain atau tunggu reservasi dan check-in masuk."
        />
      ) : (
        <div className="m-stack-sm">
          {rows.map((r) => {
            const isToday = r.day === currentDay;
            const canStart = isToday && r.visit_status === 'WAITING';
            const canFinish = isToday && r.visit_status === 'ACTIVE';
            const canAdjust = canStart && r.items.length === 1;
            return (
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
                    {r.ticket && <span className="m-pill is-neutral">Antrean #{r.ticket}</span>}
                  </div>
                  <p className="m-ops-meta">
                    <strong>{time.format(r.start)} WIB</strong> · {date.format(r.start)} · {r.booked_duration} menit
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
                  {r.ticket && (
                    <p className="m-muted m-small-note">
                      <Clock3 size={13} aria-hidden="true" /> Tiba {formatTimeWib(r.arrived)}
                      {r.eta ? ` · Perkiraan mulai ${formatTimeWib(r.eta)}` : ''}
                      {r.estimate ? ` · Perkiraan selesai ${formatTimeWib(r.estimate)}` : ''}
                      {r.started ? ` · Mulai ${formatTimeWib(r.started)}` : ''}
                      {r.ended ? ` · Selesai ${formatTimeWib(r.ended)}` : ''}
                    </p>
                  )}
                </div>

                {(canStart || canFinish) && (
                  <div className="m-ops-card-side">
                    {canStart && (
                      <>
                        <button
                          type="button"
                          className="m-primary m-btn-sm"
                          disabled={busyKey === `start:${r.id}`}
                          onClick={() => void sessionAction('start', r)}
                        >
                          <Play size={15} />
                          {busyKey === `start:${r.id}` ? 'Memulai…' : 'Mulai sesi'}
                        </button>
                        {canAdjust ? (
                          <button
                            type="button"
                            className="m-secondary m-btn-sm"
                            onClick={() => openAdjust(r)}
                          >
                            <SlidersHorizontal size={15} /> Sesuaikan layanan
                          </button>
                        ) : (
                          <small className="m-muted">
                            Penyesuaian untuk multi-layanan belum tersedia.
                          </small>
                        )}
                      </>
                    )}
                    {canFinish && (
                      <button
                        type="button"
                        className="m-primary m-btn-sm"
                        disabled={busyKey === `finish:${r.id}`}
                        onClick={() => void sessionAction('finish', r)}
                      >
                        <CheckCircle2 size={15} />
                        {busyKey === `finish:${r.id}` ? 'Menyelesaikan…' : 'Selesaikan sesi'}
                      </button>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      <Modal
        open={Boolean(adjustTarget)}
        onOpenChange={(next) => {
          if (!next) setAdjustTarget(null);
        }}
        title={adjustTarget ? `Sesuaikan hasil konsultasi · ${adjustTarget.name}` : 'Sesuaikan layanan'}
        description="Perubahan hanya diterapkan bila kapasitas slot masih aman dan disetujui pelanggan."
      >
        <form className="m-form" onSubmit={submitAdjust}>
          <label>
            Layanan final
            <select value={adjustService} onChange={(e) => setAdjustService(e.target.value)} required>
              {board?.settings.services
                .filter((s) => s.active)
                .map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.duration} mnt · {money.format(s.price)})
                  </option>
                ))}
            </select>
          </label>
          <label>
            Capster pelaksana
            <select value={adjustCapster} onChange={(e) => setAdjustCapster(e.target.value)} required>
              {board?.settings.capsters
                .filter((c) => c.active)
                .map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </label>
          <label className="m-checkbox-row">
            <input
              type="checkbox"
              checked={adjustApproved}
              onChange={(e) => setAdjustApproved(e.target.checked)}
              required
            />
            <span>Pelanggan menyetujui penyesuaian layanan ini.</span>
          </label>
          <Notice text={adjustError} />
          <div className="m-actions">
            <button type="submit" className="m-primary" disabled={adjustBusy || !adjustApproved}>
              {adjustBusy ? 'Memeriksa kapasitas…' : 'Simpan perubahan'}
            </button>
            <button type="button" className="m-secondary" onClick={() => setAdjustTarget(null)}>
              Batal
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

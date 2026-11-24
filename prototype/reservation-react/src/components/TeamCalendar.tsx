import { useEffect, useState, type FormEvent } from 'react';
import {
  addDays,
  api,
  BLOCK_KIND_LABELS,
  date,
  errorMessage,
  formatDayId,
  formatTimeWib,
  formatWeekdayDayId,
  formatWeekdayShortId,
  money,
  STATUS_LABELS,
  time,
  wibMinutesOfDay,
  type BlockKind,
  type OpsConfig,
  type Reservation,
  type Rules,
  type TimeBlock,
} from '../api';
import { EmptyState, Modal, Notice, StatusBadge } from './ui';
import {
  Ban,
  CalendarDays,
  CalendarOff,
  ChevronLeft,
  ChevronRight,
  Coffee,
  GraduationCap,
  Pencil,
  Plus,
  Timer,
  Trash2,
} from 'lucide-react';

const HOUR_HEIGHT = 76; // px per 60 minutes (~1.267px/min)
const START_PAD_MIN = 15; // spacing guard

const TIME_OPTIONS: Array<{ value: number; label: string }> = [];
for (let m = 7 * 60; m <= 22 * 60; m += 15) {
  const hh = String(Math.floor(m / 60)).padStart(2, '0');
  const mm = String(m % 60).padStart(2, '0');
  TIME_OPTIONS.push({ value: m, label: `${hh}:${mm} WIB` });
}

const DEFAULT_BLOCK_LABELS: Record<BlockKind, string> = {
  BREAK: 'Istirahat makan siang',
  TRAINING: 'Pelatihan & briefing tim',
  OFF: 'Izin / libur khusus',
  BUSY: 'Waktu terpesan internal',
};

function BlockIcon({ kind }: { kind: BlockKind }) {
  if (kind === 'BREAK') return <Coffee size={13} aria-hidden="true" />;
  if (kind === 'TRAINING') return <GraduationCap size={13} aria-hidden="true" />;
  if (kind === 'OFF') return <CalendarOff size={13} aria-hidden="true" />;
  return <Ban size={13} aria-hidden="true" />;
}

function getStatusToneClass(r: Reservation): string {
  const st = r.visit_status || r.status;
  if (st === 'ACTIVE') return 'is-active';
  if (st === 'WAITING') return 'is-waiting';
  if (st === 'DONE') return 'is-done';
  if (st === 'REQUESTED') return 'is-requested';
  return 'is-confirmed';
}

function weekdayUtc(day: string): number {
  return new Date(day + 'T00:00:00Z').getUTCDay();
}

function formatHourRange(startHour: number, endHour: number): string {
  const s = String(startHour).padStart(2, '0');
  const e = String(endHour).padStart(2, '0');
  return `${s}:00–${e}:00`;
}

export function DayResourceCalendar({
  day,
  todayDay,
  capsters,
  rows,
  blocks,
  rules,
  singleMode = false,
  onSelectAppointment,
  onAddBlock,
  onSelectBlock,
  onEditShift,
}: {
  day: string;
  todayDay: string;
  capsters: OpsConfig['capsters'];
  rows: Reservation[];
  blocks: TimeBlock[];
  rules: Rules;
  singleMode?: boolean;
  onSelectAppointment?: (r: Reservation) => void;
  onAddBlock?: (capsterId: string, startMin?: number) => void;
  onSelectBlock?: (block: TimeBlock) => void;
  onEditShift?: (capster: OpsConfig['capsters'][0]) => void;
}) {
  const weekday = weekdayUtc(day);
  const salonCloseHour = weekday === 0 ? rules.sunday : rules.close;

  const minShiftStart = capsters.reduce((acc, c) => Math.min(acc, c.start), rules.open);
  const maxShiftEnd = capsters.reduce((acc, c) => Math.max(acc, c.end), salonCloseHour);

  const windowStartHour = Math.max(6, Math.min(8, minShiftStart));
  const windowEndHour = Math.min(23, Math.max(20, maxShiftEnd + 1));
  const totalMinutes = (windowEndHour - windowStartHour) * 60;
  const gridHeight = ((windowEndHour - windowStartHour) * HOUR_HEIGHT);
  const hours: number[] = [];
  for (let h = windowStartHour; h <= windowEndHour; h += 1) {
    hours.push(h);
  }

  const pxFromMin = (minOfDay: number) =>
    ((minOfDay - windowStartHour * 60) / 60) * HOUR_HEIGHT;

  const nowMin = day === todayDay ? wibMinutesOfDay(Date.now()) : -1;
  const showNowLine =
    nowMin >= windowStartHour * 60 && nowMin <= windowEndHour * 60;

  if (!capsters.length) {
    return (
      <EmptyState
        icon={<CalendarDays size={25} strokeWidth={1.5} />}
        title="Belum ada capster aktif"
        description="Aktifkan minimal satu capster di Pengaturan Salon untuk menampilkan kalender jadwal."
      />
    );
  }

  return (
    <div className="m-cal-shell" role="region" aria-label={`Kalender harian ${formatDayId(day)}`}>
      <div className={`m-cal-scroll ${singleMode ? 'is-single' : ''}`}>
        <div
          className="m-cal-columns-head"
          style={{
            gridTemplateColumns: `64px repeat(${capsters.length}, minmax(${singleMode ? '280px' : '220px'}, 1fr))`,
          }}
        >
          <div className="m-cal-corner">WIB</div>
          {capsters.map((c) => {
            const isOff = weekday === c.off;
            const effectiveEnd = Math.min(c.end, salonCloseHour);
            const capRowsCount = rows.filter((r) => r.capster === c.id && r.day === day).length;
            return (
              <div className={`m-cal-cap-head ${isOff ? 'is-off' : ''}`} key={c.id}>
                <div className="m-cal-cap-id">
                  <span className="m-capster-avatar" aria-hidden="true">
                    {c.name.trim().charAt(0).toUpperCase()}
                  </span>
                  <div className="m-cal-cap-meta">
                    <strong>{c.name}</strong>
                    <small>
                      {isOff
                        ? 'Libur mingguan'
                        : `${formatHourRange(c.start, effectiveEnd)} · ${capRowsCount} jadwal`}
                    </small>
                  </div>
                </div>
                <div className="m-cal-cap-actions">
                  {onEditShift && (
                    <button
                      type="button"
                      className="m-cal-mini-btn"
                      onClick={() => onEditShift(c)}
                      title={`Jadwalkan shift ${c.name}`}
                      aria-label={`Jadwalkan shift ${c.name}`}
                    >
                      <Pencil size={13} aria-hidden="true" />
                    </button>
                  )}
                  {onAddBlock && (
                    <button
                      type="button"
                      className="m-cal-mini-btn"
                      onClick={() => onAddBlock(c.id)}
                      title={`Blok waktu ${c.name}`}
                      aria-label={`Tambah blok waktu untuk ${c.name}`}
                    >
                      <Plus size={14} aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="m-cal-body"
          style={{
            height: `${gridHeight}px`,
            gridTemplateColumns: `64px repeat(${capsters.length}, minmax(${singleMode ? '280px' : '220px'}, 1fr))`,
          }}
        >
          {/* Left Time Axis */}
          <div className="m-cal-axis" aria-hidden="true">
            {hours.slice(0, -1).map((h) => (
              <div className="m-cal-axis-hour" key={h} style={{ height: `${HOUR_HEIGHT}px` }}>
                <span>{String(h).padStart(2, '0')}:00</span>
              </div>
            ))}
          </div>

          {/* Capster Columns */}
          {capsters.map((c) => {
            const isOff = weekday === c.off;
            const shiftStartMin = Math.max(c.start, rules.open) * 60;
            const shiftEndMin = Math.min(c.end, salonCloseHour) * 60;
            const dayRows = rows.filter((r) => r.capster === c.id && r.day === day);
            const dayBlocks = blocks.filter((b) => b.capster === c.id && b.day === day);

            const preShiftH = Math.max(0, pxFromMin(shiftStartMin));
            const postShiftTop = Math.max(0, pxFromMin(shiftEndMin));
            const postShiftH = Math.max(0, gridHeight - postShiftTop);

            const hasBreak = !isOff && rules.breakStart < rules.breakEnd;
            const breakTop = hasBreak ? pxFromMin(rules.breakStart * 60) : 0;
            const breakH = hasBreak
              ? Math.max(18, pxFromMin(rules.breakEnd * 60) - pxFromMin(rules.breakStart * 60))
              : 0;

            return (
              <div className={`m-cal-col ${isOff ? 'is-off' : ''}`} key={c.id}>
                {/* Hour Gridlines & clickable empty hour bands */}
                {hours.slice(0, -1).map((h) => (
                  <div
                    className="m-cal-hour-cell"
                    key={h}
                    style={{ height: `${HOUR_HEIGHT}px` }}
                  >
                    {onAddBlock && !isOff && h * 60 >= shiftStartMin && h * 60 < shiftEndMin && (
                      <button
                        type="button"
                        className="m-cal-slot-add"
                        onClick={() => onAddBlock(c.id, h * 60)}
                        aria-label={`Tambah blok waktu ${c.name} pukul ${String(h).padStart(2, '0')}:00`}
                      >
                        <Plus size={12} aria-hidden="true" /> Blok waktu {String(h).padStart(2, '0')}:00
                      </button>
                    )}
                  </div>
                ))}

                {/* Outside-shift shading / Off day */}
                {isOff ? (
                  <div className="m-cal-off-full">
                    <span>Hari libur mingguan</span>
                  </div>
                ) : (
                  <>
                    {preShiftH > 0 && (
                      <div
                        className="m-cal-outside-band"
                        style={{ top: 0, height: `${preShiftH}px` }}
                        aria-hidden="true"
                      />
                    )}
                    {postShiftH > 0 && (
                      <div
                        className="m-cal-outside-band"
                        style={{ top: `${postShiftTop}px`, height: `${postShiftH}px` }}
                        aria-hidden="true"
                      />
                    )}
                  </>
                )}

                {/* Salon Daily Break Band */}
                {hasBreak && breakH > 0 && (
                  <div
                    className="m-cal-break-band"
                    style={{ top: `${breakTop}px`, height: `${breakH}px` }}
                  >
                    <Coffee size={13} aria-hidden="true" />
                    <span>
                      {String(rules.breakStart).padStart(2, '0')}:00–
                      {String(rules.breakEnd).padStart(2, '0')}:00 · Istirahat salon
                    </span>
                  </div>
                )}

                {/* Custom Time Blocks */}
                {dayBlocks.map((block) => {
                  const sMin = wibMinutesOfDay(block.start);
                  const eMin = Math.max(sMin + START_PAD_MIN, wibMinutesOfDay(block.end));
                  const top = Math.max(0, pxFromMin(sMin));
                  const height = Math.max(26, pxFromMin(eMin) - top);
                  return (
                    <button
                      type="button"
                      key={block.id}
                      className={`m-cal-block is-kind-${block.kind.toLowerCase()}`}
                      style={{ top: `${top + 1}px`, height: `${height - 2}px` }}
                      onClick={() => onSelectBlock?.(block)}
                    >
                      <div className="m-cal-block-head">
                        <BlockIcon kind={block.kind} />
                        <span>
                          {time.format(block.start)}–{time.format(block.end)}
                        </span>
                      </div>
                      <strong>{block.label}</strong>
                    </button>
                  );
                })}

                {/* Appointments */}
                {dayRows.map((r) => {
                  const sMin = wibMinutesOfDay(r.start);
                  const baseEndMs = r.end;
                  const activeExtraMs =
                    r.visit_status === 'ACTIVE' && r.estimate && r.estimate > r.end
                      ? r.estimate - r.end
                      : 0;
                  const visualEndMs = activeExtraMs > 0 ? r.estimate! : baseEndMs;
                  const eMin = Math.max(sMin + 25, wibMinutesOfDay(visualEndMs));

                  const top = Math.max(0, Math.min(gridHeight - 36, pxFromMin(sMin)));
                  const rawHeight = Math.max(44, pxFromMin(eMin) - top);
                  const height = Math.min(gridHeight - top - 2, rawHeight);
                  const hasExtraTime = activeExtraMs > 60000;
                  const statusText = STATUS_LABELS[r.visit_status || r.status] || r.status;

                  return (
                    <button
                      type="button"
                      key={r.id}
                      className={`m-cal-event ${getStatusToneClass(r)}`}
                      style={{ top: `${top + 1}px`, height: `${Math.max(42, height - 2)}px` }}
                      onClick={() => onSelectAppointment?.(r)}
                    >
                      <div className="m-cal-event-top">
                        <span className="m-cal-event-time">
                          {time.format(r.start)}–{time.format(visualEndMs)}
                        </span>
                        <span className="m-cal-event-badge">
                          {r.ticket ? `#${r.ticket} · ` : ''}
                          {statusText}
                        </span>
                      </div>
                      <strong className="m-cal-event-name">{r.name}</strong>
                      <span className="m-cal-event-services">
                        {r.items.map((i) => i.name).join(' + ')}
                      </span>
                      {hasExtraTime && height >= 76 && (
                        <span className="m-cal-extra-tag">
                          <Timer size={11} aria-hidden="true" />+
                          {Math.round(activeExtraMs / 60000)} mnt waktu ekstra
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}

          {/* Current time WIB indicator */}
          {showNowLine && totalMinutes > 0 && (
            <div
              className="m-cal-now-line"
              style={{ top: `${pxFromMin(nowMin)}px` }}
              aria-hidden="true"
            >
              <span className="m-cal-now-dot" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function WeekTeamMatrix({
  startDay,
  todayDay,
  capsters,
  rows,
  blocks,
  rules,
  onSelectDay,
  onEditShift,
  onAddBlock,
}: {
  startDay: string;
  todayDay: string;
  capsters: OpsConfig['capsters'];
  rows: Reservation[];
  blocks: TimeBlock[];
  rules: Rules;
  onSelectDay: (day: string) => void;
  onEditShift?: (capster: OpsConfig['capsters'][0]) => void;
  onAddBlock?: (capsterId: string, day: string) => void;
}) {
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDay, i));

  return (
    <div className="m-week-shell" role="region" aria-label="Matriks jadwal mingguan tim salon">
      <div className="m-week-scroll">
        <div
          className="m-week-grid"
          style={{
            gridTemplateColumns: `190px repeat(7, minmax(145px, 1fr))`,
          }}
        >
          {/* Header Row */}
          <div className="m-week-corner">Capster &amp; Shift</div>
          {days.map((d) => {
            const dayNum = Number(d.slice(8, 10));
            const isToday = d === todayDay;
            return (
              <button
                type="button"
                key={d}
                className={`m-week-day-head ${isToday ? 'is-today' : ''}`}
                onClick={() => onSelectDay(d)}
              >
                <span className="m-week-day-num">{dayNum}</span>
                <small>{formatWeekdayShortId(d)}</small>
              </button>
            );
          })}

          {/* Capster Rows */}
          {capsters.map((c) => {
            const shiftLabel = formatHourRange(c.start, c.end);
            return (
              <div className="m-week-row-group" key={c.id} style={{ display: 'contents' }}>
                <div className="m-week-cap-cell">
                  <div className="m-cal-cap-id">
                    <span className="m-capster-avatar" aria-hidden="true">
                      {c.name.trim().charAt(0).toUpperCase()}
                    </span>
                    <div className="m-cal-cap-meta">
                      <strong>{c.name}</strong>
                      <small>{shiftLabel} WIB</small>
                    </div>
                  </div>
                  {onEditShift && (
                    <button
                      type="button"
                      className="m-cal-mini-btn"
                      onClick={() => onEditShift(c)}
                      title={`Jadwalkan shift ${c.name}`}
                      aria-label={`Jadwalkan shift ${c.name}`}
                    >
                      <Pencil size={13} aria-hidden="true" />
                    </button>
                  )}
                </div>

                {days.map((d) => {
                  const weekday = weekdayUtc(d);
                  const isOff = weekday === c.off;
                  const cellRows = rows
                    .filter((r) => r.capster === c.id && r.day === d)
                    .sort((a, b) => a.start - b.start);
                  const cellBlocks = blocks
                    .filter((b) => b.capster === c.id && b.day === d)
                    .sort((a, b) => a.start - b.start);

                  return (
                    <div className={`m-week-cell ${isOff ? 'is-off' : ''}`} key={c.id + d}>
                      <div className="m-week-cell-head">
                        {isOff ? (
                          <span className="m-week-off-pill">Libur mingguan</span>
                        ) : (
                          <span className="m-week-shift-mini">
                            {formatHourRange(c.start, Math.min(c.end, weekday === 0 ? rules.sunday : rules.close))}
                          </span>
                        )}
                        {onAddBlock && !isOff && (
                          <button
                            type="button"
                            className="m-week-add-btn"
                            onClick={() => onAddBlock(c.id, d)}
                            title={`Blok waktu ${c.name} (${d})`}
                            aria-label={`Tambah blok waktu ${c.name} tanggal ${d}`}
                          >
                            <Plus size={12} aria-hidden="true" />
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        className="m-week-cell-body"
                        onClick={() => onSelectDay(d)}
                      >
                        {cellBlocks.map((b) => (
                          <span className="m-week-pill is-block" key={b.id}>
                            <BlockIcon kind={b.kind} />
                            <span>
                              {time.format(b.start)} {b.label}
                            </span>
                          </span>
                        ))}
                        {cellRows.slice(0, 3).map((r) => (
                          <span className={`m-week-pill ${getStatusToneClass(r)}`} key={r.id}>
                            <b>{time.format(r.start)}</b>
                            <span>{r.name}</span>
                          </span>
                        ))}
                        {cellRows.length > 3 && (
                          <span className="m-week-more">+{cellRows.length - 3} jadwal lagi</span>
                        )}
                        {!isOff && cellRows.length === 0 && cellBlocks.length === 0 && (
                          <span className="m-week-empty-hint">Tersedia</span>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function BlockTimeModal({
  open,
  onOpenChange,
  capsters,
  initialCapster,
  initialDay,
  initialStartMin,
  lockCapster = false,
  minDay,
  onCreated,
}: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  capsters: OpsConfig['capsters'];
  initialCapster: string;
  initialDay: string;
  initialStartMin?: number;
  lockCapster?: boolean;
  minDay: string;
  onCreated: () => Promise<void>;
}) {
  const [capster, setCapster] = useState(initialCapster);
  const [day, setDay] = useState(initialDay);
  const [startMin, setStartMin] = useState(initialStartMin ?? 12 * 60);
  const [endMin, setEndMin] = useState((initialStartMin ?? 12 * 60) + 60);
  const [kind, setKind] = useState<BlockKind>('BREAK');
  const [label, setLabel] = useState(DEFAULT_BLOCK_LABELS.BREAK);
  const [customLabelTouched, setCustomLabelTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const s = initialStartMin ?? 12 * 60;
    setCapster(initialCapster || capsters[0]?.id || 'a');
    setDay(initialDay < minDay ? minDay : initialDay);
    setStartMin(s);
    setEndMin(Math.min(22 * 60, s + 60));
    setKind('BREAK');
    setLabel(DEFAULT_BLOCK_LABELS.BREAK);
    setCustomLabelTouched(false);
    setError('');
  }, [open, initialCapster, initialDay, initialStartMin, capsters, minDay]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api('/ops/block', {
        capster,
        day,
        startMin,
        endMin,
        kind,
        label: label.trim(),
      });
      await onCreated();
      onOpenChange(false);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Blok waktu &amp; jam istirahat"
      description="Tambahkan istirahat makan siang, pelatihan, izin khusus, atau waktu terpesan agar slot tidak dipesan online."
    >
      <form className="m-form" onSubmit={submit}>
        <div className="m-grid-two">
          <label>
            Capster
            <select
              value={capster}
              onChange={(e) => setCapster(e.target.value)}
              disabled={lockCapster}
              required
            >
              {capsters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Tanggal
            <input
              type="date"
              value={day}
              min={minDay}
              max="9999-12-31"
              onChange={(e) => setDay(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="m-grid-two">
          <label>
            Mulai (WIB)
            <select
              value={startMin}
              onChange={(e) => {
                const nextS = Number(e.target.value);
                setStartMin(nextS);
                if (endMin <= nextS) setEndMin(Math.min(22 * 60, nextS + 60));
              }}
            >
              {TIME_OPTIONS.slice(0, -1).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Selesai (WIB)
            <select value={endMin} onChange={(e) => setEndMin(Number(e.target.value))}>
              {TIME_OPTIONS.filter((opt) => opt.value > startMin).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label>
          Kategori blok waktu
          <select
            value={kind}
            onChange={(e) => {
              const nextKind = e.target.value as BlockKind;
              setKind(nextKind);
              if (!customLabelTouched) setLabel(DEFAULT_BLOCK_LABELS[nextKind]);
            }}
          >
            {(Object.entries(BLOCK_KIND_LABELS) as Array<[BlockKind, string]>).map(([k, txt]) => (
              <option key={k} value={k}>
                {txt}
              </option>
            ))}
          </select>
        </label>

        <label>
          Keterangan singkat
          <input
            value={label}
            onChange={(e) => {
              setCustomLabelTouched(true);
              setLabel(e.target.value);
            }}
            minLength={2}
            maxLength={80}
            placeholder="Contoh: Istirahat siang / Pelatihan warna"
            required
          />
        </label>

        <Notice text={error} />

        <div className="m-actions">
          <button type="submit" className="m-primary" disabled={busy}>
            {busy ? 'Menyimpan…' : 'Simpan blok waktu'}
          </button>
          <button type="button" className="m-secondary" onClick={() => onOpenChange(false)}>
            Batal
          </button>
        </div>
      </form>
    </Modal>
  );
}

export function BlockDetailModal({
  block,
  capsters,
  canDelete,
  onClose,
  onDeleted,
}: {
  block: TimeBlock | null;
  capsters: OpsConfig['capsters'];
  canDelete: boolean;
  onClose: () => void;
  onDeleted: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [block?.id]);

  const remove = async () => {
    if (!block) return;
    setBusy(true);
    setError('');
    try {
      await api('/ops/block/remove', { id: block.id });
      await onDeleted();
      onClose();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  const capName = capsters.find((c) => c.id === block?.capster)?.name || block?.capster || '';

  return (
    <Modal
      open={Boolean(block)}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
      title={block ? block.label : 'Blok waktu'}
      description={block ? `${BLOCK_KIND_LABELS[block.kind]} · ${capName}` : undefined}
    >
      {block && (
        <div className="m-stack-sm">
          <dl className="m-detail-list">
            <div>
              <dt>Tanggal</dt>
              <dd>{formatWeekdayDayId(block.day)}</dd>
            </div>
            <div>
              <dt>Waktu</dt>
              <dd>
                {time.format(block.start)} – {time.format(block.end)} WIB
              </dd>
            </div>
            <div>
              <dt>Status slot</dt>
              <dd>Tertutup untuk pemesanan baru</dd>
            </div>
          </dl>
          <Notice text={error} />
          <div className="m-actions">
            {canDelete && (
              <button type="button" className="m-primary" onClick={() => void remove()} disabled={busy}>
                <Trash2 size={15} aria-hidden="true" />
                {busy ? 'Membuka kembali…' : 'Hapus blok waktu'}
              </button>
            )}
            <button type="button" className="m-secondary" onClick={onClose}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}

export function CalendarToolbar({
  day,
  todayDay,
  viewMode,
  onChangeDay,
  onChangeViewMode,
  onAddBlock,
  children,
}: {
  day: string;
  todayDay: string;
  viewMode?: 'DAY' | 'WEEK';
  onChangeDay: (nextDay: string) => void;
  onChangeViewMode?: (mode: 'DAY' | 'WEEK') => void;
  onAddBlock?: () => void;
  children?: React.ReactNode;
}) {
  const stepOffset = viewMode === 'WEEK' ? 7 : 1;

  return (
    <section className="m-toolbar-card m-cal-toolbar" aria-label="Kontrol kalender jadwal">
      <div className="m-cal-nav-row">
        <div className="m-cal-date-nav">
          <button
            type="button"
            className="m-icon-button"
            onClick={() => onChangeDay(addDays(day, -stepOffset))}
            aria-label={viewMode === 'WEEK' ? 'Minggu sebelumnya' : 'Hari sebelumnya'}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <input
            type="date"
            value={day}
            max="9999-12-31"
            onChange={(e) => {
              if (e.target.value) onChangeDay(e.target.value);
            }}
            aria-label="Pilih tanggal kalender"
          />
          <button
            type="button"
            className="m-icon-button"
            onClick={() => onChangeDay(addDays(day, stepOffset))}
            aria-label={viewMode === 'WEEK' ? 'Minggu berikutnya' : 'Hari berikutnya'}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`m-chip ${day === todayDay ? 'is-active' : ''}`}
            onClick={() => onChangeDay(todayDay)}
          >
            Hari ini
          </button>
        </div>

        <div className="m-cal-right-tools">
          {viewMode && onChangeViewMode && (
            <div className="m-segmented" role="tablist" aria-label="Tampilan kalender">
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'DAY'}
                className={`m-seg-btn ${viewMode === 'DAY' ? 'is-active' : ''}`}
                onClick={() => onChangeViewMode('DAY')}
              >
                Harian per capster
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'WEEK'}
                className={`m-seg-btn ${viewMode === 'WEEK' ? 'is-active' : ''}`}
                onClick={() => onChangeViewMode('WEEK')}
              >
                Mingguan (7 hari)
              </button>
            </div>
          )}
          {onAddBlock && (
            <button type="button" className="m-primary m-btn-sm" onClick={onAddBlock}>
              <Plus size={15} aria-hidden="true" /> Blok waktu &amp; istirahat
            </button>
          )}
        </div>
      </div>

      <div className="m-cal-legend-row">
        <p className="m-cal-active-date">{formatWeekdayDayId(day)} (WIB)</p>
        <div className="m-cal-legend" aria-label="Legenda status jadwal">
          <span className="m-cal-leg is-confirmed">Terkonfirmasi</span>
          <span className="m-cal-leg is-waiting">Antrean tiba</span>
          <span className="m-cal-leg is-active">Sedang dilayani</span>
          <span className="m-cal-leg is-requested">Menunggu konfirmasi</span>
          <span className="m-cal-leg is-block">Blok / Istirahat</span>
        </div>
      </div>

      {children}
    </section>
  );
}

export function AppointmentQuickSheet({
  appointment,
  capsters,
  onClose,
  children,
}: {
  appointment: Reservation | null;
  capsters: OpsConfig['capsters'];
  onClose: () => void;
  children?: React.ReactNode;
}) {
  const capName =
    capsters.find((c) => c.id === appointment?.capster)?.name || appointment?.capster || '';

  return (
    <Modal
      open={Boolean(appointment)}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
      title={appointment ? appointment.name : 'Detail jadwal'}
      description={
        appointment
          ? `${capName} · ${date.format(appointment.start)} · ${time.format(appointment.start)} WIB`
          : undefined
      }
    >
      {appointment && (
        <div className="m-stack-sm">
          <div className="m-card-badges">
            <StatusBadge status={appointment.visit_status || appointment.status} />
            {appointment.channel && <StatusBadge status={appointment.channel} variant="channel" />}
            {appointment.ticket && <span className="m-pill is-neutral">Antrean #{appointment.ticket}</span>}
            {appointment.code && <span className="m-code-chip">{appointment.code}</span>}
          </div>

          <dl className="m-detail-list">
            <div>
              <dt>Jadwal</dt>
              <dd>
                {time.format(appointment.start)} –{' '}
                {time.format(
                  appointment.visit_status === 'ACTIVE' && appointment.estimate
                    ? appointment.estimate
                    : appointment.end
                )}{' '}
                WIB
              </dd>
            </div>
            <div>
              <dt>Layanan</dt>
              <dd>
                {appointment.items.map((i) => `${i.name} (${i.duration} mnt)`).join(', ')}
              </dd>
            </div>
            <div>
              <dt>Total durasi &amp; biaya</dt>
              <dd>
                {appointment.booked_duration} menit · {money.format(appointment.booked_price)}
              </dd>
            </div>
            {appointment.visit_status === 'ACTIVE' && appointment.estimate && (
              <div>
                <dt>Perkiraan selesai</dt>
                <dd>{formatTimeWib(appointment.estimate)}</dd>
              </div>
            )}
          </dl>

          {children || (
            <div className="m-actions">
              <button type="button" className="m-secondary" onClick={onClose}>
                Tutup
              </button>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

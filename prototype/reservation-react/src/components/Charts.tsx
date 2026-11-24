import { useId } from 'react';
import type { Reservation, Rules } from '../api';

const jakartaHourFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  hourCycle: 'h23',
});

function getJakartaHour(ms: number): number {
  const h = Number(jakartaHourFmt.format(ms));
  return Number.isFinite(h) ? h % 24 : 0;
}

export const CHART_TONES = [
  '#5b3b2d', // espresso brown
  '#ad684f', // terracotta accent
  '#4b7a57', // sage green
  '#c47e3e', // warm amber
  '#3e6386', // slate blue
  '#8c776a', // warm taupe
];

export function HourlyScheduleChart({
  title,
  subtitle,
  rows,
  rules,
  workStart,
  workEnd,
}: {
  title: string;
  subtitle: string;
  rows: Reservation[];
  rules: Rules;
  workStart?: number;
  workEnd?: number;
}) {
  const startHour = Math.max(0, Math.min(22, rules.open ?? 9));
  const endHour = Math.max(startHour + 1, Math.min(24, Math.max(rules.close ?? 19, rules.sunday ?? 18)));

  const buckets: Array<{
    hour: number;
    label: string;
    total: number;
    confirmedOrActive: number;
    isBreak: boolean;
    offShift: boolean;
  }> = [];

  for (let h = startHour; h < endHour; h++) {
    const isBreak = h >= rules.breakStart && h < rules.breakEnd;
    const offShift =
      workStart !== undefined && workEnd !== undefined ? h < workStart || h >= workEnd : false;
    const inHour = rows.filter((r) => getJakartaHour(r.start) === h);
    const active = inHour.filter(
      (r) => r.status === 'CONFIRMED' || r.visit_status === 'ACTIVE' || r.visit_status === 'DONE'
    ).length;
    buckets.push({
      hour: h,
      label: `${String(h).padStart(2, '0')}:00`,
      total: inHour.length,
      confirmedOrActive: active,
      isBreak,
      offShift,
    });
  }

  const maxVal = Math.max(...buckets.map((b) => b.total), 2);
  const w = 640;
  const h = 210;
  const padL = 32;
  const padR = 14;
  const padT = 22;
  const padB = 34;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const stepX = plotW / Math.max(1, buckets.length);
  const barW = Math.min(34, Math.max(14, stepX * 0.62));

  return (
    <section className="m-chart-card">
      <div className="m-chart-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="m-pill is-neutral">WIB · {rows.length} jadwal</span>
      </div>

      <div className="m-svg-wrap">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="m-svg-chart"
          role="img"
          aria-label={`${title}: ${rows.length} total jadwal dari pukul ${startHour}:00 hingga ${endHour}:00 WIB`}
        >
          {[0, 0.5, 1].map((ratio, idx) => {
            const y = padT + plotH * (1 - ratio);
            const tickVal = Math.round(maxVal * ratio);
            return (
              <g key={idx}>
                <line
                  x1={padL}
                  y1={y}
                  x2={w - padR}
                  y2={y}
                  stroke={ratio === 0 ? '#cfbda9' : '#efe6dc'}
                  strokeDasharray={ratio === 0 ? undefined : '4 4'}
                />
                <text x={padL - 8} y={y + 4} textAnchor="end" className="m-svg-axis">
                  {tickVal}
                </text>
              </g>
            );
          })}

          {buckets.map((b, idx) => {
            const cx = padL + stepX * idx + stepX / 2;
            const x = cx - barW / 2;
            const barH = b.total > 0 ? Math.max(8, (b.total / maxVal) * plotH) : 4;
            const y = padT + plotH - barH;
            const fill = b.total > 0 ? '#5b3b2d' : b.isBreak ? '#e5d4c3' : b.offShift ? '#ece7e1' : '#e8ddd2';
            return (
              <g key={b.hour}>
                {b.isBreak && (
                  <rect
                    x={padL + stepX * idx + 2}
                    y={padT}
                    width={Math.max(4, stepX - 4)}
                    height={plotH}
                    rx={8}
                    fill="#f3e6d8"
                    opacity={0.75}
                  />
                )}
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  rx={6}
                  fill={fill}
                />
                {b.total > 0 && (
                  <text x={cx} y={y - 6} textAnchor="middle" className="m-svg-value">
                    {b.total}
                  </text>
                )}
                <text x={cx} y={h - 10} textAnchor="middle" className="m-svg-axis">
                  {String(b.hour).padStart(2, '0')}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="m-chart-legend">
        <span>
          <i style={{ background: '#5b3b2d' }} aria-hidden="true" /> Jadwal terjadwal
        </span>
        <span>
          <i style={{ background: '#f3e6d8', border: '1px solid #d5c1ae' }} aria-hidden="true" /> Jam istirahat (
          {String(rules.breakStart).padStart(2, '0')}:00–{String(rules.breakEnd).padStart(2, '0')}:00)
        </span>
        {workStart !== undefined && workEnd !== undefined && (
          <span>
            <i style={{ background: '#ece7e1' }} aria-hidden="true" /> Shift Anda ({String(workStart).padStart(2, '0')}
            :00–{String(workEnd).padStart(2, '0')}:00)
          </span>
        )}
      </div>

      <details className="m-chart-table-wrap">
        <summary>Lihat tabel rincian per jam ({buckets.length} jam)</summary>
        <table className="m-table">
          <thead>
            <tr>
              <th>Jam (WIB)</th>
              <th>Status</th>
              <th>Jumlah jadwal</th>
            </tr>
          </thead>
          <tbody>
            {buckets.map((b) => (
              <tr key={b.hour}>
                <td>{b.label}</td>
                <td>{b.isBreak ? 'Istirahat' : b.offShift ? 'Di luar shift' : 'Jam layanan'}</td>
                <td>{b.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </section>
  );
}

export function DailySeriesChart({
  title,
  subtitle,
  unitLabel,
  series,
  formatValue,
  tone = 'brown',
}: {
  title: string;
  subtitle: string;
  unitLabel: string;
  series: Array<{ label: string; value: number }>;
  formatValue: (v: number) => string;
  tone?: 'brown' | 'sage';
}) {
  const gradId = useId();
  const hasData = series.length > 0 && series.some((s) => Number(s.value) > 0);
  const stroke = tone === 'sage' ? '#4b7a57' : '#5b3b2d';
  const fillTop = tone === 'sage' ? '#4b7a57' : '#ad684f';

  const w = 640;
  const h = 210;
  const padL = 46;
  const padR = 18;
  const padT = 20;
  const padB = 34;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const maxVal = Math.max(...series.map((s) => Number(s.value) || 0), 1);

  const points = series.map((s, idx) => {
    const x =
      series.length === 1
        ? padL + plotW / 2
        : padL + (idx / Math.max(1, series.length - 1)) * plotW;
    const y = padT + plotH - ((Number(s.value) || 0) / maxVal) * plotH;
    return { x, y, label: s.label, value: Number(s.value) || 0 };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const areaPath =
    points.length > 0
      ? `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${points[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`
      : '';

  const labelStep = Math.max(1, Math.ceil(points.length / 7));

  return (
    <section className="m-chart-card">
      <div className="m-chart-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="m-pill is-neutral">{unitLabel}</span>
      </div>

      {!hasData ? (
        <div className="m-chart-empty-inline">
          <p className="m-muted">Belum ada nilai tercatat pada rentang tanggal ini.</p>
        </div>
      ) : (
        <>
          <div className="m-svg-wrap">
            <svg viewBox={`0 0 ${w} ${h}`} className="m-svg-chart" role="img" aria-label={title}>
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={fillTop} stopOpacity="0.28" />
                  <stop offset="100%" stopColor={fillTop} stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {[0, 0.5, 1].map((ratio, idx) => {
                const y = padT + plotH * (1 - ratio);
                const val = Math.round(maxVal * ratio);
                return (
                  <g key={idx}>
                    <line
                      x1={padL}
                      y1={y}
                      x2={w - padR}
                      y2={y}
                      stroke={ratio === 0 ? '#cfbda9' : '#efe6dc'}
                      strokeDasharray={ratio === 0 ? undefined : '4 4'}
                    />
                    <text x={padL - 8} y={y + 4} textAnchor="end" className="m-svg-axis">
                      {val >= 1000000
                        ? `${(val / 1000000).toFixed(1)}jt`
                        : val >= 1000
                          ? `${Math.round(val / 1000)}rb`
                          : val}
                    </text>
                  </g>
                );
              })}

              {points.length > 1 && <path d={areaPath} fill={`url(#${gradId})`} />}
              {points.length > 1 && (
                <path d={linePath} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              )}

              {points.map((p, idx) => (
                <g key={p.label}>
                  <circle cx={p.x} cy={p.y} r={points.length <= 14 ? 4.2 : 3} fill="#fffdfb" stroke={stroke} strokeWidth="2.2">
                    <title>{`${p.label}: ${formatValue(p.value)}`}</title>
                  </circle>
                  {(idx % labelStep === 0 || idx === points.length - 1) && (
                    <text x={p.x} y={h - 10} textAnchor="middle" className="m-svg-axis">
                      {p.label}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>

          <details className="m-chart-table-wrap">
            <summary>Lihat tabel data ({series.length} hari)</summary>
            <table className="m-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>{unitLabel}</th>
                </tr>
              </thead>
              <tbody>
                {series.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{formatValue(Number(row.value) || 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </>
      )}
    </section>
  );
}

export function DonutBreakdownChart({
  title,
  subtitle,
  centerLabel,
  centerValue,
  segments,
  formatValue = (v) => String(v),
}: {
  title: string;
  subtitle: string;
  centerLabel: string;
  centerValue: string | number;
  segments: Array<{ label: string; value: number; tone?: string }>;
  formatValue?: (v: number) => string;
}) {
  const total = segments.reduce((sum, s) => sum + (Number(s.value) || 0), 0);
  const r = 54;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <section className="m-chart-card">
      <div className="m-chart-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="m-pill is-neutral">{total} total</span>
      </div>

      <div className="m-donut-layout">
        <div className="m-donut-ring-wrap">
          <svg viewBox="0 0 144 144" className="m-donut-svg" role="img" aria-label={`${title}: ${total} total`}>
            <circle cx="72" cy="72" r={r} fill="none" stroke="#efe6dc" strokeWidth="18" />
            {total > 0 &&
              segments.map((seg, idx) => {
                const val = Number(seg.value) || 0;
                if (val <= 0) return null;
                const frac = val / total;
                const dash = frac * c;
                const currentOffset = offset;
                offset += dash;
                const color = seg.tone || CHART_TONES[idx % CHART_TONES.length];
                return (
                  <circle
                    key={seg.label}
                    cx="72"
                    cy="72"
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth="18"
                    strokeDasharray={`${dash} ${c}`}
                    strokeDashoffset={-currentOffset}
                    transform="rotate(-90 72 72)"
                  />
                );
              })}
            <text x="72" y="69" textAnchor="middle" className="m-donut-center-val">
              {centerValue}
            </text>
            <text x="72" y="86" textAnchor="middle" className="m-donut-center-lbl">
              {centerLabel}
            </text>
          </svg>
        </div>

        <ul className="m-donut-legend">
          {segments.length === 0 || total === 0 ? (
            <li className="m-muted">Belum ada data pada periode terpilih.</li>
          ) : (
            segments.map((seg, idx) => {
              const val = Number(seg.value) || 0;
              const pct = total > 0 ? Math.round((val / total) * 100) : 0;
              const color = seg.tone || CHART_TONES[idx % CHART_TONES.length];
              return (
                <li key={seg.label}>
                  <span className="m-legend-left">
                    <i style={{ background: color }} aria-hidden="true" />
                    <span>{seg.label}</span>
                  </span>
                  <strong>
                    {formatValue(val)} <small>({pct}%)</small>
                  </strong>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
}

export function HorizontalMetricChart({
  title,
  subtitle,
  unitLabel,
  rows,
  formatValue,
  emptyMessage = 'Belum ada data tercatat untuk periode ini.',
  barColor = '#5b3b2d',
}: {
  title: string;
  subtitle: string;
  unitLabel: string;
  rows: Array<{ label: string; value: number; meta?: string }>;
  formatValue: (v: number) => string;
  emptyMessage?: string;
  barColor?: string;
}) {
  const hasData = rows.length > 0 && rows.some((row) => Number(row.value) > 0);
  const max = Math.max(...rows.map((row) => Number(row.value) || 0), 1);

  return (
    <section className="m-chart-card">
      <div className="m-chart-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="m-pill is-neutral">{unitLabel}</span>
      </div>

      {!hasData ? (
        <div className="m-chart-empty-inline">
          <p className="m-muted">{emptyMessage}</p>
        </div>
      ) : (
        <>
          <div className="m-chart-bars" aria-hidden="true">
            {rows.map((row) => {
              const val = Number(row.value) || 0;
              const pct = Math.max(0, Math.min(100, (val / max) * 100));
              return (
                <div className="m-chart-row-modern" key={row.label}>
                  <div className="m-chart-row-head">
                    <span>
                      <strong>{row.label}</strong>
                      {row.meta && <small> · {row.meta}</small>}
                    </span>
                    <strong className="m-chart-val">{formatValue(val)}</strong>
                  </div>
                  <div className="m-chart-track">
                    <div
                      className="m-chart-fill"
                      style={{ width: `${pct}%`, background: barColor }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <details className="m-chart-table-wrap">
            <summary>Lihat tabel data ({rows.length} baris)</summary>
            <table className="m-table">
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th>{unitLabel}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{formatValue(Number(row.value) || 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </>
      )}
    </section>
  );
}

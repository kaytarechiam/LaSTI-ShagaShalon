export type Role = 'customer' | 'staff' | 'capster' | 'manager';

export interface Account {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: Role;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  active?: boolean;
}

export interface Capster {
  id: string;
  name: string;
  skills: string[];
  active?: boolean;
  start?: number;
  end?: number;
  off?: number;
}

export interface Rules {
  open: number;
  close: number;
  sunday: number;
  breakStart: number;
  breakEnd: number;
  buffer: number;
  early: number;
  late: number;
}

export interface Catalog {
  services: Service[];
  capsters: Capster[];
  buffer: number;
  today: string;
}

export interface Slot {
  start: number;
  end: number;
}

export interface Reservation {
  id: string;
  status: 'REQUESTED' | 'CONFIRMED';
  code?: string;
  start: number;
  end: number;
  day: string;
  capster: string;
  service?: string;
  name: string;
  phone?: string;
  items: Service[];
  booked_price: number;
  booked_duration: number;
  quote: string;
  needsReview?: boolean;
  ticket?: number | null;
  visit_status?: 'WAITING' | 'ACTIVE' | 'DONE' | null;
  channel?: 'RESERVASI' | 'WALK_IN' | null;
  arrived?: number | null;
  started?: number | null;
  ended?: number | null;
  estimate?: number | null;
  eta?: number | null;
  payment_status?: 'NOT_READY' | 'READY' | 'UNPAID' | 'PAID';
}

export type BlockKind = 'BREAK' | 'TRAINING' | 'OFF' | 'BUSY';

export interface TimeBlock {
  id: string;
  capster: string;
  day: string;
  start: number;
  end: number;
  kind: BlockKind;
  label: string;
  createdBy?: number;
  createdAt?: number;
}

export interface OpsConfig {
  version: number;
  services: Array<Service & { active: boolean }>;
  capsters: Array<{
    id: string;
    name: string;
    skills: string[];
    active: boolean;
    start: number;
    end: number;
    off: number;
  }>;
  rules: Rules;
  blocks?: TimeBlock[];
}

export interface OpsBoardResponse {
  rows: Reservation[];
  settings: OpsConfig;
  mine: string | null;
  ready: boolean;
  draft: OpsConfig | null;
}

export interface InvoiceAdjustment {
  old_total: number;
  new_total: number;
  reason: string;
  actor: string;
  created: number;
}

export interface InvoiceDetail {
  reservation: string;
  original_total: number;
  total: number;
  created: number;
  paid_amount: number | null;
  method: 'CASH' | 'TRANSFER' | 'OTHER' | null;
  paid_at: number | null;
  adjustments?: InvoiceAdjustment[];
}

export interface SettlementDetailResponse {
  invoice: InvoiceDetail | null;
  feedback?: { rating: number; comment: string } | null;
  visitStatus: string;
}

export interface SettlementReportResponse {
  counts: { reservations: number; visits: number; walkins: number; finished: number };
  payments: { count: number; total: number | string };
  methods: Array<{ method: string; count: number; total: number | string }>;
  feedback: { count: number; average: number | null };
  popular: Array<{ name: string; count: number }>;
  comments: Array<{
    reservation: string;
    rating: number;
    comment: string;
    created: number;
    followups?: Array<{ note: string; created: number }> | null;
  }>;
  invoices: { count: number; unpaid_count: number; unpaid_total: number | string };
  statuses: Array<{ status: string; count: number }>;
  ratings: Array<{ rating: number; count: number }>;
  series: Array<{ day: string; visits: number; payments: number; paid_total: number | string }>;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function api<T>(path: string, body?: object): Promise<T> {
  const response = await fetch(
    '/api' + path,
    body === undefined
      ? {}
      : {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
  );
  const result: unknown = await response.json();
  if (!response.ok) {
    const message =
      typeof result === 'object' &&
      result &&
      'message' in result &&
      typeof result.message === 'string'
        ? result.message
        : 'Terjadi gangguan. Silakan coba lagi.';
    throw new ApiError(response.status, message);
  }
  return result as T;
}

export const money = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});

export const date = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  dateStyle: 'long',
});

export const shortDate = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const time = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

export function jakartaToday(): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Jakarta' }).format(new Date());
}

export function addDays(day: string, offset: number): string {
  const ms = Date.parse(day + 'T00:00:00Z') + offset * 86400000;
  return new Date(ms).toISOString().slice(0, 10);
}

export function formatDayId(day: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(day + 'T00:00:00Z'));
}

export function formatShortDayId(day: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(day + 'T00:00:00Z'));
}

export function formatTimeWib(value?: number | null): string {
  return value ? `${time.format(value)} WIB` : '—';
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Koneksi terganggu. Silakan coba lagi.';
}

export const ROLE_LABELS: Record<Role, string> = {
  customer: 'Pelanggan',
  staff: 'Resepsionis & Kasir',
  capster: 'Capster',
  manager: 'Manajer',
};

export const STATUS_LABELS: Record<string, string> = {
  REQUESTED: 'Menunggu konfirmasi',
  CONFIRMED: 'Terkonfirmasi',
  WAITING: 'Menunggu layanan',
  ACTIVE: 'Sedang dilayani',
  DONE: 'Selesai',
};

export const PAYMENT_STATUS_LABELS: Record<string, string> = {
  NOT_READY: 'Pelayanan belum selesai',
  READY: 'Siap ditagihkan',
  UNPAID: 'Belum lunas',
  PAID: 'Lunas',
};

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  CASH: 'Tunai',
  TRANSFER: 'Transfer',
  OTHER: 'Lainnya',
};

export const BLOCK_KIND_LABELS: Record<BlockKind, string> = {
  BREAK: 'Istirahat / Makan Siang',
  TRAINING: 'Pelatihan & Briefing',
  OFF: 'Hari Libur / Cuti Khusus',
  BUSY: 'Waktu Terpesan Internal',
};

export function wibMinutesOfDay(ms: number): number {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
      .formatToParts(ms)
      .map((p) => [p.type, Number(p.value)])
  );
  const hh = (parts.hour || 0) === 24 ? 0 : parts.hour || 0;
  return hh * 60 + (parts.minute || 0);
}

export function formatWeekdayShortId(day: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'short',
    timeZone: 'UTC',
  }).format(new Date(day + 'T00:00:00Z'));
}

export function formatWeekdayDayId(day: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(day + 'T00:00:00Z'));
}

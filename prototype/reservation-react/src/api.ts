export interface Account { id: number; name: string; email: string; phone: string; role: 'customer' | 'staff' | 'capster' | 'manager' }
export interface Service { id: string; name: string; price: number; duration: number; active?: boolean }
export interface Capster { id: string; name: string; skills: string[]; active?: boolean }
export interface Catalog { services: Service[]; capsters: Capster[]; buffer: number; today: string }
export interface Slot { start: number; end: number }
export interface Reservation {
  id: string; status: 'REQUESTED' | 'CONFIRMED'; code?: string; start: number; end: number;
  day: string; capster: string; name: string; phone: string; items: Service[];
  booked_price: number; booked_duration: number; quote: string; needsReview?: boolean;
  ticket?: number; visit_status?: 'WAITING' | 'ACTIVE' | 'DONE';
}
export class ApiError extends Error { constructor(public status: number, message: string) { super(message); } }
export async function api<T>(path: string, body?: object): Promise<T> {
  const response = await fetch('/api' + path, body === undefined ? {} : {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  const result: unknown = await response.json();
  if (!response.ok) {
    const message = typeof result === 'object' && result && 'message' in result && typeof result.message === 'string' ? result.message : 'Terjadi gangguan. Silakan coba lagi.';
    throw new ApiError(response.status, message);
  }
  return result as T;
}
export const money = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
export const date = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', dateStyle: 'long' });
export const time = new Intl.DateTimeFormat('id-ID', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });

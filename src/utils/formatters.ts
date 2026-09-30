import { Currency } from '../types/homestay';
import { HOMESTAY_INFO } from '../data/homestayData';

export function formatPrice(amountVnd: number, currency: Currency): string {
  if (currency === 'USD') {
    const usd = Math.round(amountVnd / HOMESTAY_INFO.usdExchangeRate);
    return `$${usd}`;
  }
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0
  }).format(amountVnd);
}

export function formatNumberOnly(amountVnd: number, currency: Currency): string {
  if (currency === 'USD') {
    const usd = Math.round(amountVnd / HOMESTAY_INFO.usdExchangeRate);
    return `${usd} USD`;
  }
  return new Intl.NumberFormat('vi-VN').format(amountVnd) + ' ₫';
}

export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 1;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

export function getTodayDateString(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

export function getTomorrowDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

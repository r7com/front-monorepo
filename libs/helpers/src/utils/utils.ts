import { day, hour } from '../constants'

export function isDevMode(local = isClientSide() && window.location.hostname) {
  return local && /(localhost)/i.test(local)
}

export function isClientSide() {
  return globalThis.document !== undefined && globalThis.window !== undefined
}

function daysInMonth(): number {
  const date = new Date()
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export function getDomain(href = isClientSide() && window.location.href) {
  const hostname = href && new URL(href).hostname
  const newHost = hostname && hostname.replace(/^www\./, '').replace(/:\d+$/, '')

  return `.${newHost}`
}

export function getDuration(expiration: number, unit: 'hour' | 'day' | 'month' | 'year'): Date {
  const daysInCurrentMonth = daysInMonth()
  const timeUnits = {
    hour,
    day,
    month: day * daysInCurrentMonth,
    year: day * daysInCurrentMonth * 12,
  }

  const date = new Date()
  date.setTime(date.getTime() + expiration * timeUnits[unit])

  return date
}

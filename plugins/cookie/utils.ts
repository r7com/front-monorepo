import { clientSideVerify } from 'helpers/utils'

function daysInMonth(): number {
  const date = new Date()
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export function getDomain(href = clientSideVerify() && window.location.href) {
  const hostname = new URL(href).hostname
  const newHost = hostname.replace(/^www\./, '').replace(/:\d+$/, '')

  return `.${newHost}`
}

export function getDuration(expiration: number, unit: 'hour' | 'day' | 'month' | 'year'): Date {
  const daysInCurrentMonth = daysInMonth()
  const timeUnits = {
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    month: 1000 * 60 * 60 * 24 * daysInCurrentMonth,
    year: 1000 * 60 * 60 * 24 * daysInCurrentMonth * 12,
  }

  const date = new Date()
  date.setTime(date.getTime() + expiration * timeUnits[unit])

  return date
}

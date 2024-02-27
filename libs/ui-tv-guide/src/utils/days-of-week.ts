export type DAYS_PT_TYPE =
  | 'segunda'
  | 'terca'
  | 'quarta'
  | 'quinta'
  | 'sexta'
  | 'sabado'
  | 'domingo'

export type DAYS_US_TYPE =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export const DAYS: Record<DAYS_US_TYPE, DAYS_PT_TYPE> = {
  Monday: 'segunda',
  Tuesday: 'terca',
  Wednesday: 'quarta',
  Thursday: 'quinta',
  Friday: 'sexta',
  Saturday: 'sabado',
  Sunday: 'domingo',
}

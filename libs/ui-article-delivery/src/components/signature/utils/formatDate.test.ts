import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('should return date with the correct format', () => {
    const date = '2023-06-29T15:12:23Z'
    const finalDate = '29/06/2023 - 12h12'
    expect(formatDate(date)).toBe(finalDate)
  })

  it('should return empty string when the value is not valid date', () => {
    const date = '2012/04/2012 - 12h12'
    const finalDate = ''

    expect(formatDate(date)).toBe(finalDate)
  })
})

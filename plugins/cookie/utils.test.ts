import { getDomain, getDuration } from './utils'

describe('getDomain', () => {
  it('should return the domain without www and port', () => {
    const mockLocation = 'http://www.example.com:8080/path'
    const result = getDomain(mockLocation)
    expect(result).toBe('.example.com')
  })
})

describe('getDuration', () => {
  it('should return a Date object with the correct duration added based on unit', () => {
    const expiration = 2
    const unit = 'day'
    const result = getDuration(expiration, unit)
    const currentDate = new Date()
    const expectedDate = new Date(currentDate.getTime() + expiration * 24 * 60 * 60 * 1000)
    expect(result).toEqual(expectedDate)
  })
})

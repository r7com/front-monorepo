import { getDomain, getDuration } from './utils'

describe('getDomain', () => {
  it('should return the domain without www and port', () => {
    const mockLocation = {
      href: 'http://www.example.com:8080/path',
    }
    const result = getDomain(mockLocation)
    expect(result).toBe('.example.com')
  })

  it('should return the domain without www and port for default location', () => {
    const result = getDomain()
    const expectedDefaultResult = getDomain(window.location)
    expect(result).toBe(expectedDefaultResult)
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

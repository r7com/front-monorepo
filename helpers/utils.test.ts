import { isDevMode } from './utils'

describe('isDevMode', () => {
  it('Shoud return if is dev mode', () => {
    const dev1 = 'cda-dev.ir7.com'
    const dev2 = 'localhost'
    const prod1 = 'r7.com'

    expect(isDevMode()).toBe(true)
    expect(isDevMode(dev1)).toBe(true)
    expect(isDevMode(dev2)).toBe(true)
    expect(isDevMode(prod1)).toBe(false)
  })
})

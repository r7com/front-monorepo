import { audimaDomain } from './utils'
describe('audimaDomain', () => {
  it('Should return "audio8" if domain has ".r7.com"', () => {
    window = Object.create(window)

    Object.defineProperty(window, 'location', {
      value: {
        hostname: 'noticias.r7.com',
      },
      writable: true,
    })

    const result = 'audio8'
    expect(audimaDomain()).toEqual(result)
  })

  it('Should return "audio" if domain has not ".r7.com"', () => {
    window = Object.create(window)

    Object.defineProperty(window, 'location', {
      value: {
        hostname: 'jestjs.io',
      },
      writable: true,
    })

    const result = 'audio'
    expect(audimaDomain()).toEqual(result)
  })
})

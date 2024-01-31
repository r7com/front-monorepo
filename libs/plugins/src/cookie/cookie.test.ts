import { Cookie } from './cookie'

describe('Cookie', () => {
  const cname = 'cookie_name'
  const cvalue = 'cookie_value'
  const cdomain = 'localhost'

  beforeAll(() => Cookie.set({ cname, cvalue, cdomain }))

  afterAll(() => Cookie.delete(cname))

  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'cookie_name=cookie_value',
    })
  })

  it('should "cookieVal" be equals to "cvalue"', () => {
    const cookieVal = Cookie.get(cname)
    expect(cookieVal).toEqual(cvalue)
  })

  it('should "cookieVal" be equals to null', () => {
    const cookieVal = Cookie.get('non_existant_cookie')
    expect(cookieVal).toEqual(null)
  })
})

import { getDomain, getDuration, isClientSide } from '@r7/helpers'

type Unit = 'day' | 'month' | 'year'

export class Cookie {
  /**
   * Set a cookie with given name, value, expiration date, and unit of expiration date
   * @param {{ cname: string, cvalue: string, cdomain?: string, expiration?: number, unit?: Unit }}
   */
  static set({
    cname,
    cvalue,
    cdomain,
    expiration = 1,
    unit = 'year',
  }: {
    cname: string
    cvalue: string
    cdomain?: string
    expiration?: number
    unit?: Unit
  }) {
    if (cdomain === undefined) cdomain = getDomain()

    const date = getDuration(expiration, unit)

    const cookie = `${cname}=${cvalue};expires=${date.toUTCString()};path=/;domain=${cdomain}`

    isClientSide() && (document.cookie = cookie)
  }

  /**
   * Get a cookie by name
   * @param {string} cname
   * @return {string | null}
   */
  static get(cname: string): string | null {
    const cookies = isClientSide() && document.cookie
    const cookieRX = new RegExp(`(?:^|; )${cname}=([^;]*)`)

    const matches = cookies && cookies.match(cookieRX)

    return matches ? decodeURIComponent(matches[1]) : null
  }

  /**
   * Delete cookie by name
   * @param {string} cname
   */
  static delete(cname: string) {
    this.set({ cname, cvalue: '', expiration: -1 })
  }
}

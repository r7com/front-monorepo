export function isDevMode(local = clientSideVerify() && window.location.hostname) {
  return /(localhost)/i.test(local)
}

export function clientSideVerify() {
  return (globalThis.document !== undefined && globalThis.window !== undefined) || ''
}

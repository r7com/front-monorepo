import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <div className="layout-grid layout-gap-xs layout-grid-cols-12">{children}</div>
}

export default Layout

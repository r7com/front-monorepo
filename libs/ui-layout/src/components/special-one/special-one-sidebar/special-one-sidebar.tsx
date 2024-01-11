import { ReactNode } from 'react'

type SidebarProps = {
  children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  return <div className="layout-h-full">{children}</div>
}

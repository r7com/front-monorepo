export type SidebarListProps = {
  children: React.ReactNode
  label?: string
}

export function SidebarList({ children, label }: SidebarListProps) {
  return <ul aria-label={label ? `Menu para ${label}` : 'Menu'}>{children}</ul>
}

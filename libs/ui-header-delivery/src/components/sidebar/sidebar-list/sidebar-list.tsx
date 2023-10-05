export type SidebarListProps = {
  children: React.ReactNode
}

export function SidebarList({ children }: SidebarListProps) {
  return <ul aria-label="menu">{children}</ul>
}

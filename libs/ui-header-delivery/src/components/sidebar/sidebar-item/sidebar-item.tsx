export type SidebarItemProps = {
  children: React.ReactNode
}

export function SidebarItem({ children }: SidebarItemProps) {
  return (
    <li className="header-header-header-header-header-header-header-header-header-header-header-header-header-[&:not(:last-child)]:mb-xxs header-text-xxxs header-font-medium">
      {children}
    </li>
  )
}

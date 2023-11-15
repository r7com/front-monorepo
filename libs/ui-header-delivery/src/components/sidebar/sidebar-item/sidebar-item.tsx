export type SidebarItemProps = {
  children: React.ReactNode
}

export function SidebarItem({ children }: SidebarItemProps) {
  return (
    <li className="[&:not(:last-child)]:header-mb-xxs header-text-xxxs header-font-medium">
      {children}
    </li>
  )
}

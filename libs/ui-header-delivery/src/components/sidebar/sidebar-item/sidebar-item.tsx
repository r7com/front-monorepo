export type SidebarItemProps = {
  children: React.ReactNode
}

export function SidebarItem({ children }: SidebarItemProps) {
  return <li className="[&:not(:last-child)]:mb-xxs text-xxxs font-medium">{children}</li>
}

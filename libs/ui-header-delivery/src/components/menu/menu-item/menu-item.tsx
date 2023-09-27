export type MenuItemProps = {
  children: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  return <li className="relative h-lg inline-flex mr-xxxs uppercase">{children}</li>
}

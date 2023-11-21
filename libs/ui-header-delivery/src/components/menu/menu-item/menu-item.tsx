export type MenuItemProps = {
  children: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  return (
    <li className="header-relative header-h-lg header-inline-flex header-mr-xxxs header-uppercase header-cursor-pointer header-items-center header-text-neutral-high-500 hover:header-text-neutral-high-400">
      {children}
    </li>
  )
}

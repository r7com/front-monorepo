export type MenuItemProps = {
  children: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  return (
    <li className="relative h-lg inline-flex mr-xxxs uppercase cursor-pointer items-center text-neutral-high-500 hover:text-neutral-high-400">
      {children}
    </li>
  )
}

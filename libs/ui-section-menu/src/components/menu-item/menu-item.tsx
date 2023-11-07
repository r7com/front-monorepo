import { useSectionMenuActions } from '../../utils/hooks/use-section-menu-actions'

export type MenuItemProps = {
  children: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  const submenu = useSectionMenuActions()

  return (
    <li
      onMouseLeave={submenu.hide}
      className="h-lg flex items-center transition-colors relative font-medium whitespace-nowrap text-light-low-400 text-xxs border-b-thin border-transparent hover:border-[var(--section-color)]"
    >
      {children}
    </li>
  )
}

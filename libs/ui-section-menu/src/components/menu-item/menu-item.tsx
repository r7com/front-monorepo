import { useSectionMenuActions } from '../../utils/hooks/use-section-menu-actions'

export type MenuItemProps = {
  children: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps) {
  const submenu = useSectionMenuActions()

  return (
    <li
      onMouseLeave={submenu.hide}
      className="smenu-h-lg smenu-flex smenu-items-center smenu-transition-colors smenu-relative smenu-font-medium smenu-whitespace-nowrap smenu-text-light-low-400 smenu-text-xxs smenu-border-b-thin smenu-border-transparent hover:smenu-border-[var(--section-color)]"
    >
      {children}
    </li>
  )
}

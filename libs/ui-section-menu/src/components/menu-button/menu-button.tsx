import { useSectionMenuActions } from '../../utils/hooks/use-section-menu-actions'
import { SvgIcon } from '@r7/ui-base-components'

export type MenuButtonProps = {
  children: React.ReactNode
  id: string
}

export function MenuButton({ children, id }: MenuButtonProps) {
  const submenu = useSectionMenuActions()

  const toggleSubmenu = () => {
    if (id !== submenu.currentActive) submenu.show(id)
    else submenu.hide()
  }

  return (
    <button
      type="button"
      onMouseEnter={toggleSubmenu}
      onClick={toggleSubmenu}
      aria-expanded={id === submenu.currentActive}
      className="smenu-flex smenu-uppercase smenu-items-center smenu-gap-nano smenu-h-full hover:smenu-text-[var(--section-color)] hover:!smenu-fill-[var(--section-color)] smenu-transition-colors"
    >
      {children}
      <SvgIcon iconName="chevron-bottom" className="smenu-transition-none" size="small" />
    </button>
  )
}

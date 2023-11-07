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
      className="flex uppercase items-center gap-nano h-full hover:text-[var(--section-color)] hover:!fill-[var(--section-color)] transition-colors"
    >
      {children}
      <SvgIcon iconName="chevron-bottom" className="transition-none" size="small" />
    </button>
  )
}

import { SvgIcon } from '@r7/ui-base-components'
import { useHeaderActions } from '../../header/utils/hooks/use-header-actions'

export type SidebarButtonProps = {
  children: React.ReactNode
  /** id must be an unique pair between sidebar-button and its corresponding sidebar-submenu */
  id: string
}

export function SidebarButton({ children, id }: SidebarButtonProps) {
  const { submenu } = useHeaderActions()

  const activeSubmenu = () => submenu.show(id)

  return (
    <button
      type="button"
      onClick={activeSubmenu}
      aria-expanded={id === submenu.currentActive}
      tabIndex={submenu.currentActive ? -1 : undefined}
      className="header-bg-none header-flex header-justify-between header-items-center header-w-full header-text-neutral-low-500 header-uppercase"
    >
      {children}
      <SvgIcon
        iconName="chevron-right"
        className="header-fill-neutral-high-600"
        width={13}
        height={13}
      />
    </button>
  )
}

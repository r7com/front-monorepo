import { SvgIcon } from '@r7/ui-base-components'
import { useHeaderActions } from '../../header/utils/hooks/use-header-actions'

export type SidebarButtonProps = {
  children: React.ReactNode
  /** id must be an unique pair between sidebar-button and its corresponding sidebar-submenu */
  id: string
  parentSubmenuId?: string
}

export function SidebarButton({ children, id, parentSubmenuId }: SidebarButtonProps) {
  const { submenu } = useHeaderActions()
  const activeSubmenu = () => submenu.show(id, 'show')

  const isMainSidebar = submenu.currentActive.length === 0
  const isOpenedSubmenu = submenu.currentActive.findIndex(item => item === parentSubmenuId) !== -1
  const isLastOpenedSubmenu =
    parentSubmenuId === submenu.currentActive[submenu.currentActive.length - 1]

  return (
    <button
      type="button"
      onClick={activeSubmenu}
      aria-expanded={submenu.currentActive.includes(id)}
      tabIndex={isMainSidebar ? undefined : isOpenedSubmenu && isLastOpenedSubmenu ? undefined : -1}
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

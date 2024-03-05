import { useHeaderActions } from '../../header/utils/hooks/use-header-actions'
import { variants } from './sidebar-submenu.variants'
import { Button, SvgIcon } from '@r7/ui-base-components'

export type SidebarSubmenuProps = {
  children: React.ReactNode
  /** id must be an unique pair between sidebar-button and its corresponding sidebar-submenu */
  id: string
}

export function SidebarSubmenu({ children, id }: SidebarSubmenuProps) {
  const { submenu } = useHeaderActions()

  const closeMenu = () => submenu.hide(id)
  const isCurrentActive = submenu.currentActive.includes(id)

  return (
    <div className={variants({ isSubmenuOpen: isCurrentActive })}>
      <Button
        color="ghost"
        size="large"
        className="header-capitalize header-font-extrabold"
        onClick={closeMenu}
        startIcon={
          <SvgIcon iconName="arrow-left" size="small" className="header-fill-brand-primary-500" />
        }
      >
        voltar
      </Button>
      {children}
    </div>
  )
}

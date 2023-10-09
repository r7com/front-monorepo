import { useSidebar } from '../utils/hooks/use-sidebar'
import { variants } from './sidebar-submenu.variants'
import { Button, SvgIcon } from '@r7/ui-base-components'

export type SidebarSubmenuProps = {
  children: React.ReactNode
  /** id must be an unique pair between sidebar-button and its corresponding sidebar-submenu */
  id: string
}

export function SidebarSubmenu({ children, id }: SidebarSubmenuProps) {
  const { submenu } = useSidebar()

  const backToMainMenu = () => submenu.hide()
  const isCurrentActive = submenu.currentActive === id

  return (
    <div className={variants({ isSubmenuOpen: isCurrentActive })}>
      <Button
        color="ghost"
        size="large"
        className="capitalize font-extrabold"
        onClick={backToMainMenu}
        startIcon={
          <SvgIcon iconName="arrow-left" size="small" className="fill-brand-primary-500" />
        }
      >
        voltar
      </Button>
      {children}
    </div>
  )
}

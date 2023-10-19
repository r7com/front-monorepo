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
      className="bg-none flex justify-between items-center w-full text-neutral-low-500 uppercase"
    >
      {children}
      <SvgIcon iconName="chevron-right" className="fill-neutral-high-600" width={13} height={13} />
    </button>
  )
}

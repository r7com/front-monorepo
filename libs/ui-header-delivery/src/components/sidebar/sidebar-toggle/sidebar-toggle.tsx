import { variants } from './sidebar-toggle.variants'
import { useHeaderActions } from '../../header/utils/hooks/use-header-actions'

export type SidebarToggleProps = {
  children: React.ReactNode
}

export function SidebarToggle({ children }: SidebarToggleProps) {
  const { sidebar } = useHeaderActions()

  const toggleSidebar = () => sidebar.toggle(!sidebar.isOpen)

  const { buttonSlot, iconSlot, firstLineSlot, secondLineSlot, thirdLineSlot, verticalLineSlot } =
    variants({
      isSidebarOpen: sidebar.isOpen,
    })

  return (
    <>
      <button
        type="button"
        className={buttonSlot()}
        aria-controls="sidebar"
        aria-expanded={sidebar.isOpen}
        onClick={toggleSidebar}
      >
        <div className={iconSlot()}>
          <span className={firstLineSlot()}></span>
          <span className={secondLineSlot()}></span>
          <span className={thirdLineSlot()}></span>
        </div>
        {children}
      </button>
      <span className={verticalLineSlot()}></span>
    </>
  )
}

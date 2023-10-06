import { variants } from './sidebar-toggle.variants'
import { useSidebar } from '../utils/hooks/use-sidebar'

export type SidebarToggleProps = {
  children: React.ReactNode
}

export function SidebarToggle({ children }: SidebarToggleProps) {
  const { sidebar } = useSidebar()

  const toggleSidebar = () => sidebar.toggle(!sidebar.isOpen)

  const { buttonSlot, iconSlot, firstLineSlot, secondLineSlot, thirdLineSlot } = variants({
    isSidebarOpen: sidebar.isOpen,
  })

  return (
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
  )
}

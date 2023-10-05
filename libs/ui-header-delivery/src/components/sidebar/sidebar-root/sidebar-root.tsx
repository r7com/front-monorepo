import { useSidebar } from '../utils/hooks/use-sidebar'
import { variants } from './sidebar-root.variants'

export type SidebarRootProps = {
  children: React.ReactNode
}

export function SidebarRoot({ children }: SidebarRootProps) {
  const { sidebar } = useSidebar()

  const { sidebarListSlot, sidebarSlot, backdropButtonSlot } = variants({
    isSidebarOpen: sidebar.isOpen,
  })

  const closeSidebar = () => sidebar.toggle(false)

  return (
    <>
      <nav className={sidebarSlot()} id="sidebar" aria-label="Menu lateral">
        <ul className={sidebarListSlot()}>{children}</ul>
      </nav>
      <button className={backdropButtonSlot()} onClick={closeSidebar} aria-controls="sidebar">
        <span className="sr-only">fechar menu</span>
      </button>
    </>
  )
}

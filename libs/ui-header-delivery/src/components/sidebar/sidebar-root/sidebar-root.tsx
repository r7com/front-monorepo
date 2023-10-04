import { useSidebar } from '../utils/hooks/use-sidebar'
import { variants } from './sidebar-root.variants'

export type SidebarRootProps = {
  children: React.ReactNode
}

export function SidebarRoot({ children }: SidebarRootProps) {
  const { sidebar } = useSidebar()

  const { sidebarContainer, sidebarMenu } = variants({ isSidebarOpen: sidebar.isOpen })

  const closeSidebar = () => sidebar.toggle(false)

  return (
    <div className={sidebarContainer()}>
      <button className="absolute inset-0" onClick={closeSidebar} aria-controls="sidebar">
        <span className="sr-only">fechar menu</span>
      </button>
      <nav className={sidebarMenu()} id="sidebar" aria-label="Menu lateral">
        {children}
      </nav>
    </div>
  )
}

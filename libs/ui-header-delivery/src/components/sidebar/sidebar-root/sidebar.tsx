import { SidebarToggle } from '../sidebar-toggle/sidebar-toggle'
import { SidebarCategory } from '../sidebar-category/sidebar-category'
import { SidebarList } from '../sidebar-list/sidebar-list'
import { SidebarItem } from '../sidebar-item/sidebar-item'
import { SidebarButton } from '../sidebar-button/sidebar-button'
import { SidebarLink } from '../sidebar-link/sidebar-link'
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu'

import { useSidebar } from '../utils/hooks/use-sidebar'
import { variants } from './sidebar.variants'

export type SidebarRootProps = {
  children: React.ReactNode
}

export function Sidebar({ children }: SidebarRootProps) {
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

Sidebar.Toggle = SidebarToggle
Sidebar.Category = SidebarCategory
Sidebar.List = SidebarList
Sidebar.Item = SidebarItem
Sidebar.Button = SidebarButton
Sidebar.Link = SidebarLink
Sidebar.Submenu = SidebarSubmenu

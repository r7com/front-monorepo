import { useEffect, useState } from 'react'
import { SidebarContext } from '../context/sidebar-context'

export type SidebarProviderProps = {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [{ currentActiveSubmenu, isSidebarOpen }, setState] = useState({
    isSidebarOpen: false,
    currentActiveSubmenu: '',
  })

  const toggleSidebar = (open: boolean) => {
    setState(() => ({ isSidebarOpen: open, currentActiveSubmenu: '' }))
  }

  const toggleSubmenu = (id = '') => {
    setState(prev => ({ ...prev, currentActiveSubmenu: id }))
  }

  useEffect(() => {
    document.body.classList[isSidebarOpen ? 'add' : 'remove']('overflow-hidden')

    return () => document.body.classList.remove('overflow-hidden')
  }, [isSidebarOpen])

  return (
    <SidebarContext.Provider
      value={{
        sidebar: {
          isOpen: isSidebarOpen,
          toggle: toggleSidebar,
        },
        submenu: {
          currentActive: currentActiveSubmenu,
          show: toggleSubmenu,
          hide: toggleSubmenu,
        },
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

import { useEffect, useState } from 'react'
import { HeaderContext } from '../context/header-context'

export type HeaderProviderProps = {
  children: React.ReactNode
}

export function HeaderProvider({ children }: HeaderProviderProps) {
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
    <HeaderContext.Provider
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
    </HeaderContext.Provider>
  )
}

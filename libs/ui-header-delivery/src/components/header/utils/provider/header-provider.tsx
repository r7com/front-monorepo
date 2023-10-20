import { useEffect, useState } from 'react'
import { HeaderContext } from '../context/header-context'

export type HeaderProviderProps = {
  children: React.ReactNode
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [{ currentActiveSubmenu, isSidebarOpen, isSearchActive }, setState] = useState({
    isSidebarOpen: false,
    isSearchActive: false,
    currentActiveSubmenu: '',
  })

  const toggleSidebar = (open: boolean) => {
    setState(() => ({ isSidebarOpen: open, currentActiveSubmenu: '', isSearchActive }))
  }

  const toggleSubmenu = (id = '') => {
    setState(prev => ({ ...prev, currentActiveSubmenu: id }))
  }

  const toggleHeaderSearch = (open: boolean) => {
    setState(prev => ({ ...prev, isSearchActive: open }))
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
        header: {
          isSearchActive,
          toggle: toggleHeaderSearch,
        },
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

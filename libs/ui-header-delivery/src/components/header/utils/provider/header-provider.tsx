import { useEffect, useState } from 'react'
import { HeaderContext } from '../context/header-context'

export type HeaderProviderProps = {
  children: React.ReactNode
  headerRef: HTMLElement | null
}

export function HeaderProvider({ children, headerRef }: HeaderProviderProps) {
  const [{ currentActiveSubmenus, isSidebarOpen, isSearchActive }, setState] = useState<{
    isSidebarOpen: boolean
    isSearchActive: boolean
    currentActiveSubmenus: string[]
  }>({
    isSidebarOpen: false,
    isSearchActive: false,
    currentActiveSubmenus: [],
  })

  const toggleSidebar = (open: boolean) => {
    setState(() => ({ isSidebarOpen: open, currentActiveSubmenus: [], isSearchActive }))
  }

  const toggleSubmenu = (id = '', method: string) => {
    const updatedSubmenus = currentActiveSubmenus
    method === 'show'
      ? updatedSubmenus.push(id)
      : updatedSubmenus.splice(updatedSubmenus.indexOf(id), 1)
    setState(prev => ({ ...prev, currentActiveSubmenus: updatedSubmenus }))
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
          currentActive: currentActiveSubmenus,
          show: toggleSubmenu,
          hide: toggleSubmenu,
        },
        header: {
          isSearchActive,
          toggle: toggleHeaderSearch,
          height: headerRef?.clientHeight,
        },
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

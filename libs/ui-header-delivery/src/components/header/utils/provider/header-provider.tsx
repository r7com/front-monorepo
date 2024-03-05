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

  const showSubmenu = (id: string) => {
    currentActiveSubmenus.push(id)
    setState(prev => ({ ...prev, currentActiveSubmenus }))
  }

  const hideSubmenu = (id: string) => {
    currentActiveSubmenus.splice(currentActiveSubmenus.indexOf(id), 1)
    setState(prev => ({ ...prev, currentActiveSubmenus }))
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
          show: showSubmenu,
          hide: hideSubmenu,
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

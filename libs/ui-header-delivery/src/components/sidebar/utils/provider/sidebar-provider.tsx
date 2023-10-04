import { useEffect, useState } from 'react'
import { SidebarContext } from '../context/sidebar-context'

export type SidebarProviderProps = {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, toggleSidebar] = useState(false)

  useEffect(() => {
    document.body.classList[isSidebarOpen ? 'add' : 'remove']('overflow-hidden')

    return () => document.body.classList.remove('overflow-hidden')
  }, [isSidebarOpen])

  return (
    <SidebarContext.Provider
      value={{
        sidebar: {
          isOpen: isSidebarOpen,
          toggle: open => toggleSidebar(() => open),
        },
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

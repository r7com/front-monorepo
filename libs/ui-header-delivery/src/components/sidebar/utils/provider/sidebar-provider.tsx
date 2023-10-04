import { useState } from 'react'
import { SidebarContext } from '../context/sidebar-context'

export type SidebarProviderProps = {
  children: React.ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, toggleSidebar] = useState(false)

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

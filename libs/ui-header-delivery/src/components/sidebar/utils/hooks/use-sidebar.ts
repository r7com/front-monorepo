import { useContext } from 'react'
import { SidebarContext } from '../context/sidebar-context'

export function useSidebar() {
  const context = useContext(SidebarContext)

  if (context === null) {
    throw new Error('SidebarContext has not been initialized yet')
  }

  return context
}

import { createContext } from 'react'

type SidebarContextProps = {
  sidebar: {
    toggle(open: boolean): void
    isOpen: boolean
  }
}

export const SidebarContext = createContext<SidebarContextProps | null>(null)

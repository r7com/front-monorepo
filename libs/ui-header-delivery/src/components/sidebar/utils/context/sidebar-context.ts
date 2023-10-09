import { createContext } from 'react'

type SidebarContextProps = {
  sidebar: {
    toggle(open: boolean): void
    isOpen: boolean
  }
  submenu: {
    show(id: string): void
    hide(): void
    currentActive: string
  }
}

export const SidebarContext = createContext<SidebarContextProps | null>(null)

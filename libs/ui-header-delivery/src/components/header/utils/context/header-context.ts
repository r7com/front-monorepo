import { createContext } from 'react'

type HeaderContextProps = {
  sidebar: {
    toggle(open: boolean): void
    isOpen: boolean
  }
  submenu: {
    show(id: string): void
    hide(): void
    currentActive: string
  }
  header: {
    isSearchActive: boolean
    toggle(open: boolean): void
  }
}

export const HeaderContext = createContext<HeaderContextProps | null>(null)

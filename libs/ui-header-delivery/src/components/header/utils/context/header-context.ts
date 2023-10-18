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
}

export const HeaderContext = createContext<HeaderContextProps | null>(null)

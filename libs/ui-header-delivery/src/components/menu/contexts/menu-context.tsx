import { createContext } from 'react'

type MenuContextProps = {
  changeActiveMenuItem(id: string): void
  activeMenuItem: string
}

export const MenuContext = createContext<MenuContextProps | null>(null)

import { createContext } from 'react'

export const MenuContext = createContext<{
  changeActiveMenuItem(id: string): void
  activeMenuItem: string
}>(null as never)

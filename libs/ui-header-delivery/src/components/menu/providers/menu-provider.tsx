import { useState } from 'react'
import { MenuContext } from '../contexts/menu-context'

export type MenuProviderProps = {
  children: React.ReactNode
}

export function MenuProvider({ children }: MenuProviderProps) {
  const [activeMenuItem, setActiveItem] = useState<string>('')

  return (
    <MenuContext.Provider
      value={{
        changeActiveMenuItem: (id: string) => setActiveItem(() => id),
        activeMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

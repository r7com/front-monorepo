import { useContext } from 'react'
import { MenuContext } from '../contexts/menu-context'

export function useActiveItem() {
  const context = useContext(MenuContext)

  if (context === null) {
    throw new Error('MenuContext has not been initialized yet')
  }

  return context
}

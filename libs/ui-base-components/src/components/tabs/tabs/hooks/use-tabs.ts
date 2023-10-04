import { useContext } from 'react'
import { TabsContext } from '../contexts/tabs-context'

export function useTabs() {
  const context = useContext(TabsContext)

  if (context == null) {
    throw new Error('No TabsContext provided')
  }

  return context
}

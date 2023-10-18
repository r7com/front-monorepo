import { useContext } from 'react'
import { HeaderContext } from '../context/header-context'

export function useHeaderActions() {
  const context = useContext(HeaderContext)

  if (context === null) {
    throw new Error('HeaderContext has not been initialized yet')
  }

  return context
}

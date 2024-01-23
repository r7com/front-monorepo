import { useContext } from 'react'
import { FiveVerticalNewsItemContext } from './context'

export function useFiveVerticalNewsItem() {
  const context = useContext(FiveVerticalNewsItemContext)

  if (context === null) {
    throw new Error('FiveVerticalNewsItemContext has not been initialized yet')
  }

  return context
}

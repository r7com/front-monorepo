import { useContext } from 'react'
import { SectionMenuContext } from '../context/section-menu-context'

export function useSectionMenuActions() {
  const context = useContext(SectionMenuContext)

  if (context === null) {
    throw new Error('SectionMenuContext has not been initialized yet')
  }

  return context
}

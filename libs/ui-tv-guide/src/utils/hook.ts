import { useContext } from 'react'
import { TvGuideProgramsContext } from './context'

export function useTvGuidePrograms() {
  const context = useContext(TvGuideProgramsContext)

  if (context === null) {
    throw new Error('TvGuideProgramsContext has not been initialized yet')
  }

  return context
}

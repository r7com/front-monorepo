import { useContext } from 'react'
import { HotsiteContext } from '../context/hotsite-provider'

export function useHotsiteActions() {
  const context = useContext(HotsiteContext)

  if (context === null) {
    throw new Error('HotsiteContext has not been initialized yet')
  }

  return context
}

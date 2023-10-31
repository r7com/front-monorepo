import { useState } from 'react'
import { HotsiteContext } from '../context/hotsite-provider'

export type HotsiteProviderProps = {
  children: React.ReactNode
}

export function HotsiteProvider({ children }: HotsiteProviderProps) {
  const [currentActive, setCurrentActive] = useState('')

  const toggleSubmenu = (id = '') => {
    setCurrentActive(() => id)
  }

  return (
    <HotsiteContext.Provider
      value={{
        currentActive,
        show: toggleSubmenu,
        hide: toggleSubmenu,
      }}
    >
      {children}
    </HotsiteContext.Provider>
  )
}

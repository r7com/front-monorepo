import { useState } from 'react'
import { SectionMenuContext } from '../context/section-menu-context'

export type SectionMenuProviderProps = {
  children: React.ReactNode
}

export function SectionMenuProvider({ children }: SectionMenuProviderProps) {
  const [currentActive, setCurrentActive] = useState('')

  const toggleSubmenu = (id = '') => {
    setCurrentActive(() => id)
  }

  return (
    <SectionMenuContext.Provider
      value={{
        currentActive,
        show: toggleSubmenu,
        hide: toggleSubmenu,
      }}
    >
      {children}
    </SectionMenuContext.Provider>
  )
}

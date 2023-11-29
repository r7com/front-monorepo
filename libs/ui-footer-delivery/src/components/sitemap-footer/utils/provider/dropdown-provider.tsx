import { useState } from 'react'
import { DropdownContext } from '../context/dropdown-context'

export type DropdownProviderProps = {
  children: React.ReactNode
}

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle: toggleDropdown,
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

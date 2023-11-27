import { useState } from 'react'
import { DropdownContext } from '../context/dropdown-context'

export type DropdownProviderProps = {
  children: React.ReactNode
}

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  // const [openArr, setOpenArr] = useState([])

  const toggleDropdown = (id = '') => {
    setIsOpen(!isOpen)
    /* if (openArr.includes(id)) {
      setOpenArr(openArr.filter(menu => menu.id !== id))
    } else {
      setOpenArr([...openArr, id])
    } */
  }

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        onToggle: toggleDropdown,
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

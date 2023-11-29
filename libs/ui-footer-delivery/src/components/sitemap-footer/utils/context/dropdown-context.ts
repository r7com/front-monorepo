import { createContext } from 'react'

type DropdownContextProps = {
  isOpen: boolean
  handleToggle(): void
}

export const DropdownContext = createContext<DropdownContextProps | null>(null)

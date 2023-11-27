import { createContext } from 'react'

type DropdownContextProps = {
  isOpen: boolean
  onToggle(): void
}

export const DropdownContext = createContext<DropdownContextProps | null>(null)

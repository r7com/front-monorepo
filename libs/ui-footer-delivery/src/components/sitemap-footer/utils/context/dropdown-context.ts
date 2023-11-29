import { createContext } from 'react'

type DropdownContextProps = {
  isOpen: boolean
  toggle(): void
}

export const DropdownContext = createContext<DropdownContextProps | null>(null)

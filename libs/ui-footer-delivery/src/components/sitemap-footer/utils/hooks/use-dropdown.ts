import { useContext } from 'react'
import { DropdownContext } from '../context/dropdown-context'

export function useDropdown() {
  const context = useContext(DropdownContext)

  if (context == null) {
    throw new Error('No DropdownContext provided')
  }

  return context
}

import { createContext } from 'react'

type HotsiteContextProps = {
  currentActive: string
  show(id: string): void
  hide(): void
}

export const HotsiteContext = createContext<HotsiteContextProps | null>(null)

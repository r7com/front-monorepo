import { createContext } from 'react'

type SectionMenuContextProps = {
  currentActive: string
  show(id: string): void
  hide(): void
}

export const SectionMenuContext = createContext<SectionMenuContextProps | null>(null)

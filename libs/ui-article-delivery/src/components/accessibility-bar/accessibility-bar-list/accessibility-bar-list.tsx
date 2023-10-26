import { ReactNode } from 'react'

export type AccessibilityBarListProps = {
  children: ReactNode
}

export function AccessibilityBarList({ children }: AccessibilityBarListProps) {
  return (
    <ul aria-label="Barra de acessibilidade" className="flex">
      {children}
    </ul>
  )
}

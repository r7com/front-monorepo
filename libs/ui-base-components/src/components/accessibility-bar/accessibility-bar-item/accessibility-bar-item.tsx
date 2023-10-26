import { ReactNode } from 'react'

export type AccessibilityBarItemProps = {
  children: ReactNode
}
export function AccessibilityBarItem({ children }: AccessibilityBarItemProps) {
  return <li>{children}</li>
}

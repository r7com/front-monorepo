import { ReactNode } from 'react'
import { AccessibilityBarVariants, variants } from '../accessibility-bar.variants'

export type AccessibilityBarItemProps = {
  children: ReactNode
} & AccessibilityBarVariants

export function AccessibilityBarItem({ children }: AccessibilityBarItemProps) {
  const { item } = variants()
  return <li className={item()}>{children}</li>
}

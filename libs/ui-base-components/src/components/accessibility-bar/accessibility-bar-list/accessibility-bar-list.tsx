import { ReactNode } from 'react'
import { AccessibilityBarVariants, variants } from '../accessibility-bar.variants'

export type AccessibilityBarListProps = {
  children: ReactNode
} & AccessibilityBarVariants

export function AccessibilityBarList({ children }: AccessibilityBarListProps) {
  const { list } = variants()
  return <ul className={list()}>{children}</ul>
}

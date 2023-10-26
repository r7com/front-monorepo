import { ReactNode } from 'react'
import { AccessibilityBarItem } from './accessibility-bar-item'
import { AccessibilityBarList } from './accessibility-bar-list'

export type AccessibilityBarProps = {
  children: ReactNode
}

export function AccessibilityBar({ children }: AccessibilityBarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">{children}</div>
  )
}

AccessibilityBar.Item = AccessibilityBarItem
AccessibilityBar.List = AccessibilityBarList

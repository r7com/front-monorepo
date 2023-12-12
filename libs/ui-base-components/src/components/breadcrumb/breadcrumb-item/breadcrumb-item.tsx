import { ReactNode } from 'react'
import { variants } from '../breadcrumb.variants'

export type BreadcrumbItemProps = {
  children: ReactNode
}

export function BreadcrumbItem({ children }: BreadcrumbItemProps) {
  return <li className={variants()}>{children}</li>
}

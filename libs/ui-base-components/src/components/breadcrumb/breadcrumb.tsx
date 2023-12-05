import { ReactNode } from 'react'
import { BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbList } from './breadcrumb-list'

export type BreadcrumbProps = {
  children: ReactNode
}

export function Breadcrumb({ children }: BreadcrumbProps) {
  return <nav aria-label="Breadcrumb">{children}</nav>
}

Breadcrumb.List = BreadcrumbList
Breadcrumb.Item = BreadcrumbItem

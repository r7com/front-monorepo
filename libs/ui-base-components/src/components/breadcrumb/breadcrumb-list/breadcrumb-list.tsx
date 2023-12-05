import { ReactNode } from 'react'

export type BreadcrumbListProps = {
  children: ReactNode
}

export function BreadcrumbList({ children }: BreadcrumbListProps) {
  return <ol className="flex">{children}</ol>
}

import React from 'react'

type SectionMenuProps = {
  children: React.ReactNode
}

export function SectionMenu({ children }: SectionMenuProps) {
  return <nav>{children}</nav>
}

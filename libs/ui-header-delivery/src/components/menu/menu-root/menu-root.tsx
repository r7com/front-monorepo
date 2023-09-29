export type MenuRootProps = {
  children: React.ReactNode
}

export function MenuRoot({ children }: MenuRootProps) {
  return (
    <nav className="hidden sm:block flex-1" aria-label="Menu principal">
      {children}
    </nav>
  )
}

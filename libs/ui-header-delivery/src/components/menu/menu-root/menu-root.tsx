import { MenuProvider } from '../providers/menu-provider'

export type MenuRootProps = {
  children: React.ReactNode
}

export function MenuRoot({ children }: MenuRootProps) {
  return (
    <MenuProvider>
      <nav className="hidden sm:block flex-1" aria-label="Menu principal">
        {children}
      </nav>
    </MenuProvider>
  )
}

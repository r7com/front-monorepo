import { MenuItem } from '../menu-item/menu-item'
import { MenuLink } from '../menu-link/menu-link'
import { MenuRouterLink } from '../menu-router-link/menu-router-link'
import { MenuList } from '../menu-list/menu-list'

export type MenuRootProps = {
  children: React.ReactNode
}

export function Menu({ children }: MenuRootProps) {
  return (
    <nav className="header-hidden sm:header-block header-flex-1" aria-label="Menu principal">
      {children}
    </nav>
  )
}

Menu.Item = MenuItem
Menu.Link = MenuLink
Menu.RouterLink = MenuRouterLink
Menu.List = MenuList

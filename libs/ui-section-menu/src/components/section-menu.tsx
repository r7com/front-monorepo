import { MenuButton } from './menu-button/menu-button'
import { MenuItem } from './menu-item/menu-item'
import { MenuLink } from './menu-link/menu-link'
import { MenuList } from './menu-list/menu-list'
import { Submenu } from './submenu/submenu'
import { SubmenuItem } from './submenu-item/submenu-item'
import { SectionMenuProvider } from '../utils/provider/section-menu-provider'

export type SectionMenuProps = {
  children: React.ReactNode
  label: string
  sectionColor?: string
}

export function SectionMenu({ children, label, sectionColor }: SectionMenuProps) {
  return (
    <SectionMenuProvider>
      <div
        className="border-b-hairline border-neutral-high-500 overflow-x-scroll overflow-y-hidden sm:overflow-visible"
        style={
          {
            '--section-color': sectionColor || 'var(--editorial-color, #218ee1)',
          } as React.CSSProperties
        }
      >
        <nav className="relative container" aria-label={label}>
          {children}
        </nav>
      </div>
    </SectionMenuProvider>
  )
}

SectionMenu.Button = MenuButton
SectionMenu.Item = MenuItem
SectionMenu.Link = MenuLink
SectionMenu.List = MenuList
SectionMenu.Submenu = Submenu
SectionMenu.SubmenuItem = SubmenuItem

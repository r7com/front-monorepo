import { HotsiteButton } from './hotsite-button/hotsite-button'
import { HotsiteItem } from './hotsite-item/hotsite-item'
import { HotsiteLink } from './hotsite-link/hotsite-link'
import { HotsiteList } from './hotsite-list/hotsite-list'
import { HotsiteSubmenuItem } from './hotsite-submenu-item/hotsite-submenu-item'
import { HotsiteSubmenu } from './hotsite-submenu/hotsite-submenu'
import { HotsiteProvider } from './utils/provider/hotsite-provider'

export type HotsiteRootProps = {
  children: React.ReactNode
  label: string
  sectionColor?: string
}

export function Hotsite({ children, label, sectionColor }: HotsiteRootProps) {
  return (
    <HotsiteProvider>
      <div
        className="border-b-hairline border-neutral-high-500 overflow-y-auto"
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
    </HotsiteProvider>
  )
}

Hotsite.List = HotsiteList
Hotsite.Item = HotsiteItem
Hotsite.Link = HotsiteLink
Hotsite.Button = HotsiteButton
Hotsite.Submenu = HotsiteSubmenu
Hotsite.SubmenuItem = HotsiteSubmenuItem

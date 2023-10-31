import { useHotsiteActions } from '../utils/hooks/use-hotsite-actions'
import { variants } from './hotsite-submenu.variants'

export type HotsiteSubmenuProps = {
  id: string
  children: React.ReactNode
}

export function HotsiteSubmenu({ id, children }: HotsiteSubmenuProps) {
  const hotsite = useHotsiteActions()

  const isCurrentActive = hotsite.currentActive === id

  return (
    <ul className={variants({ isOpen: isCurrentActive })} aria-label="Submenu">
      {children}
    </ul>
  )
}

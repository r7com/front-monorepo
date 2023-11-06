import { useSectionMenuActions } from '../../utils/hooks/use-section-menu-actions'
import { variants } from './submenu.variants'

export type SubmenuProps = {
  id: string
  children: React.ReactNode
}

export function Submenu({ id, children }: SubmenuProps) {
  const submenu = useSectionMenuActions()

  const isCurrentActive = submenu.currentActive === id

  return (
    <ul className={variants({ isOpen: isCurrentActive })} aria-label="Submenu">
      {children}
    </ul>
  )
}

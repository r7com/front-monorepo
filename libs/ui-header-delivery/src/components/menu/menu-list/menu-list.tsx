import { useCallback, useEffect } from 'react'
import { useActiveItem } from '../hooks/use-active-item'

export type MenuListProps = {
  children: React.ReactNode
}

export function MenuList({ children }: MenuListProps) {
  const { changeActiveMenuItem, activeMenuItem } = useActiveItem()

  const closeDropdownOnLeave = useCallback(() => changeActiveMenuItem(''), [changeActiveMenuItem])

  useEffect(() => {
    const leaveOnEscapePressed = ({ key }: KeyboardEvent) => {
      if (key === 'Escape' && activeMenuItem) closeDropdownOnLeave()
    }

    document.addEventListener('keyup', leaveOnEscapePressed)

    return () => document.removeEventListener('keyup', leaveOnEscapePressed)
  }, [activeMenuItem, closeDropdownOnLeave])

  return (
    <ul
      className="ml-xxxs"
      aria-label="Barra de navegação"
      role="menubar"
      onMouseLeave={closeDropdownOnLeave}
    >
      {children}
    </ul>
  )
}

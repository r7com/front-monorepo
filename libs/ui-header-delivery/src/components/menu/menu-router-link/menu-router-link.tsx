import { NavLink, NavLinkProps } from 'react-router-dom'
import { variants } from './menu-router-link.variants'

export type MenuRouterLinkProps = {
  openInNewTab?: boolean
} & NavLinkProps

export function MenuRouterLink({ children, openInNewTab = false, ...rest }: MenuRouterLinkProps) {
  return (
    <NavLink
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className={({ isActive }) => variants({ isActive })}
      {...rest}
    >
      {children}
    </NavLink>
  )
}

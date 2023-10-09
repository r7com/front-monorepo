import { NavLink, NavLinkProps } from 'react-router-dom'
import { variants } from './menu-router-link.variants'

export type MenuRouterLinkProps = {
  openInNewtab?: React.ReactNode
} & NavLinkProps

export function MenuRouterLink({
  children,
  openInNewtab = false,
  to,
  ...rest
}: MenuRouterLinkProps) {
  return (
    <NavLink
      to={to}
      target={openInNewtab ? '_blank' : undefined}
      rel={openInNewtab ? 'noreferrer' : undefined}
      className={({ isActive }) => variants({ isActive })}
      {...rest}
    >
      {children}
    </NavLink>
  )
}

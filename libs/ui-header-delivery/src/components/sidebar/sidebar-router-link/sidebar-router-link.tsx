import { NavLink, NavLinkProps } from 'react-router-dom'
import { variants } from './sidebar-router-link.variants'

export type SidebarRouterLinkProps = {
  openInNewtab?: boolean
} & NavLinkProps

export function SidebarRouterLink({
  children,
  openInNewtab = false,
  ...rest
}: SidebarRouterLinkProps) {
  return (
    <NavLink
      target={openInNewtab ? '_blank' : undefined}
      rel={openInNewtab ? 'noreferrer' : undefined}
      className={({ isActive }) => variants({ isActive })}
      {...rest}
    >
      {children}
    </NavLink>
  )
}

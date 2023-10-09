import { NavLink, NavLinkProps } from 'react-router-dom'
import { variants } from './sidebar-router-link.variants'

export type SidebarRouterLinkProps = {
  openInNewTab?: boolean
} & NavLinkProps

export function SidebarRouterLink({
  children,
  openInNewTab = false,
  ...rest
}: SidebarRouterLinkProps) {
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

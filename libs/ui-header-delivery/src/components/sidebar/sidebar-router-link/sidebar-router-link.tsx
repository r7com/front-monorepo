import { NavLink, NavLinkProps } from 'react-router-dom'

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
      className="w-full flex hover:underline"
      {...rest}
    >
      {children}
    </NavLink>
  )
}

import { NavLink, NavLinkProps } from 'react-router-dom'

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
      className={() => 'w-full flex hover:underline'}
      {...rest}
    >
      {children}
    </NavLink>
  )
}

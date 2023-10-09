import { NavLink, NavLinkProps } from 'react-router-dom'

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
      className="h-full flex items-center text-xxxs font-normal leading-5 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
      {...rest}
    >
      {children}
    </NavLink>
  )
}

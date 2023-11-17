import { NavLink, NavLinkProps } from 'react-router-dom'

export type MenuRouterLinkProps = {
  openInNewTab?: boolean
} & NavLinkProps

export function MenuRouterLink({ children, openInNewTab = false, ...rest }: MenuRouterLinkProps) {
  return (
    <NavLink
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className={() =>
        "header-h-full header-flex header-items-center header-text-xxxs header-font-normal header-leading-5 hover:after:header-border-b-[3px] hover:after:header-absolute hover:after:header-w-full hover:after:header-inset-0 hover:after:header-content-['']"
      }
      {...rest}
    >
      {children}
    </NavLink>
  )
}

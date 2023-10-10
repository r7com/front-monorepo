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
        "h-full flex items-center text-xxxs font-normal leading-5 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
      }
      {...rest}
    >
      {children}
    </NavLink>
  )
}

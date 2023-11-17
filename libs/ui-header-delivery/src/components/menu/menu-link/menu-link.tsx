export type MenuLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, openInNewTab = false, ...rest }: MenuLinkProps) {
  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="header-h-full header-flex header-items-center header-text-xxxs header-font-normal header-leading-5 hover:after:header-border-b-[3px] hover:after:header-absolute hover:after:header-w-full hover:after:header-inset-0 hover:after:header-content-['']"
      {...rest}
    >
      {children}
    </a>
  )
}

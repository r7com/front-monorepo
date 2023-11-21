export type SidebarLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SidebarLink({ children, openInNewTab = false, ...rest }: SidebarLinkProps) {
  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="header-w-full header-flex hover:header-underline"
      {...rest}
    >
      {children}
    </a>
  )
}

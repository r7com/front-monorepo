export type SidebarLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SidebarLink({ children, openInNewTab = false, ...rest }: SidebarLinkProps) {
  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="w-full flex hover:underline"
      {...rest}
    >
      {children}
    </a>
  )
}

export type SidebarLinkProps = {
  children: React.ReactNode
  openInNewtab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SidebarLink({ children, openInNewtab = false, ...rest }: SidebarLinkProps) {
  return (
    <a
      target={openInNewtab ? '_blank' : undefined}
      rel={openInNewtab ? 'noreferrer' : undefined}
      className="w-full flex hover:underline"
      {...rest}
    >
      {children}
    </a>
  )
}

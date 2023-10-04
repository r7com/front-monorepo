export type SidebarLinkProps = {
  children: React.ReactNode
  newWindow?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SidebarLink({ children, newWindow = false, ...rest }: SidebarLinkProps) {
  return (
    <a
      target={newWindow ? '_blank' : undefined}
      rel={newWindow ? 'noreferrer' : undefined}
      className="w-full flex hover:underline"
      {...rest}
    >
      {children}
    </a>
  )
}

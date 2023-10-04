export type SidebarLinkProps = {
  children: React.ReactNode
  newWindow?: boolean
  title: string
  url: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function SidebarLink({
  children,
  title,
  url,
  newWindow = false,
  ...rest
}: SidebarLinkProps) {
  return (
    <a
      title={`Ir para ${title}`}
      href={url}
      target={newWindow ? '_blank' : undefined}
      rel={newWindow ? 'noreferrer' : undefined}
      className="w-full flex hover:underline"
      {...rest}
    >
      {children}
    </a>
  )
}

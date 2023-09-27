type InstitutionalLinkProps = {
  children: React.ReactNode
  url: string
  title: string
  openInNewtab?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

export function InstitutionalLink({
  children,
  url,
  title,
  openInNewtab = false,
  ...rest
}: InstitutionalLinkProps) {
  return (
    <a
      title={title}
      href={url}
      target={openInNewtab ? '_blank' : undefined}
      className="text-light-high-400 uppercase text-little hover:underline"
      rel={openInNewtab ? 'noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}

type InstitutionalLinkProps = {
  children: React.ReactNode
  openInNewtab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function InstitutionalLink({
  children,
  openInNewtab = false,
  ...rest
}: InstitutionalLinkProps) {
  return (
    <a
      target={openInNewtab ? '_blank' : undefined}
      className="text-light-high-400 uppercase text-little hover:underline"
      rel={openInNewtab ? 'noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}

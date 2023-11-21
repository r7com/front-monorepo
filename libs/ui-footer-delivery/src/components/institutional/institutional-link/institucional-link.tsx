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
      className="footer-text-light-high-400 footer-uppercase footer-text-little hover:footer-underline"
      rel={openInNewtab ? 'noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}

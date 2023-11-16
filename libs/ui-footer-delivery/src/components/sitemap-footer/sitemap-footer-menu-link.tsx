type SitemapFooterMenuLinkProps = {
  children: React.ReactNode
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SitemapFooterMenuLink({
  children,
  openInNewTab = false,
  ...rest
}: SitemapFooterMenuLinkProps) {
  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="hover:footer-underline"
      {...rest}
    >
      <h6>{children}</h6>
    </a>
  )
}

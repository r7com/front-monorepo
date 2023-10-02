type SitemapFooterMenuLinkProps = {
  children: React.ReactNode
  url: string
  title: string
  openInNewTab?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

export function SitemapFooterMenuLink({
  children,
  url,
  title,
  openInNewTab = false,
  ...rest
}: SitemapFooterMenuLinkProps) {
  return (
    <a
      href={url}
      title={title}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="hover:underline"
      {...rest}
    >
      <h6>{children}</h6>
    </a>
  )
}

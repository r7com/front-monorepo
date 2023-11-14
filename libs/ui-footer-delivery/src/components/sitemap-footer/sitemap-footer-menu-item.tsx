type SitemapFooterMenuItemProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuItem({ children }: SitemapFooterMenuItemProps) {
  return <li className="footer-p-xxxs">{children}</li>
}

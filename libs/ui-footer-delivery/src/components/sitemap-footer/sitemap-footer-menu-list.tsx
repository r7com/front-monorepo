type SitemapFooterMenuListProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuList({ children }: SitemapFooterMenuListProps) {
  return <ul className="footer-flex footer-flex-col">{children}</ul>
}

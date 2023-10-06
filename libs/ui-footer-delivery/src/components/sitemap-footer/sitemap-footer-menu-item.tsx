type SitemapFooterMenuItemProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuItem({ children }: SitemapFooterMenuItemProps) {
  return <li className="p-xxxs">{children}</li>
}

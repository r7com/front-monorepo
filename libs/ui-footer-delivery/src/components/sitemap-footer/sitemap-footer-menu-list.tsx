type SitemapFooterMenuListProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuList({ children }: SitemapFooterMenuListProps) {
  return <ul className="flex flex-col">{children}</ul>
}

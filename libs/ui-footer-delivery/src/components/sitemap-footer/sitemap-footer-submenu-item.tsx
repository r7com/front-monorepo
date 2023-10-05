type SitemapFooterSubmenuItemProps = {
  children: React.ReactNode
}

export function SitemapFooterSubmenuItem({ children }: SitemapFooterSubmenuItemProps) {
  return <li className="text-xxxs text-neutral-low-400 font-normal">{children}</li>
}

type SitemapFooterSubmenuItemProps = {
  children: React.ReactNode
}

export function SitemapFooterSubmenuItem({ children }: SitemapFooterSubmenuItemProps) {
  return (
    <li className="footer-text-xxxs footer-text-neutral-low-400 footer-font-normal">{children}</li>
  )
}

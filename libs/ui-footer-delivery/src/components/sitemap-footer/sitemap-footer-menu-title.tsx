type SitemapFooterMenuTitleProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuTitle({ children }: SitemapFooterMenuTitleProps) {
  return (
    <h5 className="footer-mb-xxxs footer-uppercase footer-text-sm footer-font-light footer-text-[var(--color)]">
      {children}
    </h5>
  )
}

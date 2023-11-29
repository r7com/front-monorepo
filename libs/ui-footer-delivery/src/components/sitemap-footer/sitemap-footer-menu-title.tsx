type SitemapFooterMenuTitleProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuTitle({ children }: SitemapFooterMenuTitleProps) {
  return (
    <h5 className="footer-flex footer-items-center footer-justify-between footer-uppercase footer-text-sm footer-font-light footer-w-full footer-text-[var(--color)]">
      {children}
    </h5>
  )
}

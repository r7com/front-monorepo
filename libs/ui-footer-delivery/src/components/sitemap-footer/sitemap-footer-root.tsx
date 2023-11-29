type SitemapFooterRootProps = {
  children: React.ReactNode
}

export function SitemapFooterRoot({ children }: SitemapFooterRootProps) {
  return (
    <section
      className="footer-px-xxs footer-pt-nano footer-pb-xxs footer-border-t-light-high-500 footer-border-t-hairline"
      aria-label="Mapa do site"
    >
      {children}
    </section>
  )
}

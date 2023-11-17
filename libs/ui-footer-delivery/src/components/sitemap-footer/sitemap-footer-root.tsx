type SitemapFooterRootProps = {
  children: React.ReactNode
  color?: string
}

export function SitemapFooterRoot({ children, color = '#218EE1' }: SitemapFooterRootProps) {
  return (
    <section
      className="footer-px-xxs footer-pt-nano footer-pb-xxs footer-border-t-light-high-500 footer-border-t-hairline"
      aria-label="Mapa do site"
      style={{ '--color': color } as React.CSSProperties}
    >
      {children}
    </section>
  )
}

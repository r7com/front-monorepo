type SitemapFooterRootProps = {
  children: React.ReactNode
  color?: string
}

export function SitemapFooterRoot({ children, color = '#218EE1' }: SitemapFooterRootProps) {
  return (
    <section
      className="px-xxs pt-nano pb-xxs border-t-light-high-500 border-t-hairline"
      aria-label="Mapa do site"
      style={{ '--color': color } as React.CSSProperties}
    >
      {children}
    </section>
  )
}

type SitemapFooterMenuTitleProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuTitle({ children }: SitemapFooterMenuTitleProps) {
  return (
    <h3
      className="mb-xxxs text-editorial-color uppercase text-sm font-light"
      style={{ color: 'var(--editorial-color, #218ee1)' }}
    >
      {children}
    </h3>
  )
}

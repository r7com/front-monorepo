type SitemapFooterMenuTitleProps = {
  children: React.ReactNode
  textColor?: string
}

export function SitemapFooterMenuTitle({ children, textColor = '' }: SitemapFooterMenuTitleProps) {
  return (
    <h5
      className="mb-xxxs text-editorial-color uppercase text-sm font-light"
      style={{ color: textColor || undefined }}
    >
      {children}
    </h5>
  )
}

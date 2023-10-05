type SitemapFooterMenuTitleProps = {
  children: React.ReactNode
}

export function SitemapFooterMenuTitle({ children }: SitemapFooterMenuTitleProps) {
  return <h5 className="mb-xxxs uppercase text-sm font-light text-[var(--color)]">{children}</h5>
}

type SitemapFooterRootProps = {
  children: React.ReactNode
}

export function SitemapFooterRoot({ children }: SitemapFooterRootProps) {
  return (
    <section className="px-xxs pt-nano pb-xxs border-t-light-high-500 border-t-hairline">
      {children}
    </section>
  )
}

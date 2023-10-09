type SitemapFooterContainerProps = {
  children: React.ReactNode
}

export function SitemapFooterContainer({ children }: SitemapFooterContainerProps) {
  return <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]">{children}</div>
}

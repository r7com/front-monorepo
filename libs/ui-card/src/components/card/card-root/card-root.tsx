export type RootProps = {
  children: React.ReactNode
  newsUrl: string
  newsTitle: string
  openInBlank?: boolean
}

export function CardRoot({ children, newsUrl, newsTitle, openInBlank = false }: RootProps) {
  return (
    <article>
      <a href={newsUrl} title={newsTitle} target={openInBlank ? '_blank' : undefined}>
        {children}
      </a>
    </article>
  )
}

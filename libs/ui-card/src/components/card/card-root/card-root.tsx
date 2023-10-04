export type RootProps = {
  children: React.ReactNode
  newsUrl: string
  newsTitle: string
  className?: string
  openInBlank?: boolean
}

export function CardRoot({
  children,
  newsUrl,
  newsTitle,
  className,
  openInBlank = false,
}: RootProps) {
  return (
    <article>
      <a
        className={className}
        href={newsUrl}
        title={newsTitle}
        target={openInBlank ? '_blank' : undefined}
        rel="noreferrer"
      >
        {children}
      </a>
    </article>
  )
}

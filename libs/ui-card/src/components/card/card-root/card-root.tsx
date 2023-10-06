export type CardRootProps = {
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
}: CardRootProps) {
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

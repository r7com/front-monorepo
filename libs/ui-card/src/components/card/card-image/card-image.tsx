import { CardImageVariants, variants } from './card-image.variants'

export type CardImageProps = {
  className?: string
  children: React.ReactNode
  newsUrl?: string
  newsUrlTitle?: string
  openInBlank?: boolean
} & CardImageVariants

export function CardImage({
  className = '',
  children,
  shadow = false,
  format = 'square',
  newsUrl,
  newsUrlTitle,
  openInBlank = false,
}: CardImageProps) {
  return newsUrl ? (
    <figure className={variants({ shadow, format, className })}>
      <a
        href={newsUrl}
        title={newsUrlTitle}
        target={openInBlank ? '_blank' : undefined}
        rel={openInBlank ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    </figure>
  ) : (
    <figure className={variants({ shadow, format, className })}>{children}</figure>
  )
}

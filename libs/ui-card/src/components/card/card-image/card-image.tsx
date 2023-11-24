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
    <a
      href={newsUrl}
      title={newsUrlTitle}
      target={openInBlank ? '_blank' : undefined}
      rel={openInBlank ? 'noreferrer' : undefined}
    >
      <figure className={variants({ shadow, format, className })}>{children}</figure>
    </a>
  ) : (
    <figure className={variants({ shadow, format, className })}>{children}</figure>
  )
}

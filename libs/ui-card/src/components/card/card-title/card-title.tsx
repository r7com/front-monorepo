import { CardTitleVariants, variants } from './card-title.variants'

export type CardTitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  withLink?: boolean
  newsUrl?: string
  newsUrlTitle?: string
  openInBlank?: boolean
} & CardTitleVariants

export function CardTitle({
  children,
  as,
  className = '',
  fontStyle = 'heading-level-2',
  color = 'low',
  withLink = false,
  newsUrl,
  newsUrlTitle,
  openInBlank = false,
}: CardTitleProps) {
  const DynamicTag = as || 'h3'
  return withLink ? (
    <a
      className="card-flex card-items-center"
      href={newsUrl}
      title={newsUrlTitle}
      target={openInBlank ? '_blank' : undefined}
      rel={openInBlank ? 'noreferrer' : undefined}
    >
      <DynamicTag className={variants({ fontStyle, color, className })}>{children}</DynamicTag>
    </a>
  ) : (
    <DynamicTag className={variants({ fontStyle, color, className })}>{children}</DynamicTag>
  )
}

import { CardImageVariants, variants } from './card-image.variants'

export type CardImageProps = {
  className?: string
  children: React.ReactNode
} & CardImageVariants

export function CardImage({
  className = '',
  children,
  shadow = false,
  format = 'square',
}: CardImageProps) {
  return <figure className={`${variants({ shadow, format })} ${className}`}>{children}</figure>
}

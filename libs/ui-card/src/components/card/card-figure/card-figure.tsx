import { CardFigureVariants, variants } from './card-figure.variants'

export type CardFigureProps = {
  className?: string
  children: React.ReactNode
} & CardFigureVariants

export function CardFigure({
  className = '',
  children,
  shadow = false,
  format = 'square',
}: CardFigureProps) {
  return <figure className={variants({ shadow, format, className })}>{children}</figure>
}

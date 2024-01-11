import { CardFigureVariants, variants } from './card-figure.variants'

export type CardFigureProps = {
  className?: string
  children: React.ReactNode
} & CardFigureVariants

export function CardFigure({
  className = '',
  children,
  shadow = false,
  shadowFrom = '50%',
  shadowTo = '100%',
  format = 'square',
}: CardFigureProps) {
  return (
    <figure className={variants({ shadow, shadowFrom, shadowTo, format, className })}>
      {children}
    </figure>
  )
}

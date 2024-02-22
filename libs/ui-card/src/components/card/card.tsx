import { CardHatImage } from './card-hat/card-hat-image'
import { CardHatTitle } from './card-hat/card-hat-title'
import { CardHatWrapper } from './card-hat/card-hat-wrapper'
import { CardFigure } from './card-figure/card-figure'
import { CardLabel } from './card-label/card-label'
import { CardTitle } from './card-title/card-title'

export type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article className={className} data-tb-region-item>
      {children}
    </article>
  )
}

Card.Title = CardTitle
Card.HatImage = CardHatImage
Card.HatTitle = CardHatTitle
Card.HatWrapper = CardHatWrapper
Card.Figure = CardFigure
Card.Label = CardLabel
Card.Title = CardTitle

import { CardHatImage } from './card-hat/card-hat-image'
import { CardHatTitle } from './card-hat/card-hat-title'
import { CardHatWrapper } from './card-hat/card-hat-wrapper'
import { CardImage } from './card-image/card-image'
import { CardLabel } from './card-label/card-label'
import { CardTitle } from './card-title/card-title'

export type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return <article className={className}>{children}</article>
}

Card.Title = CardTitle
Card.HatImage = CardHatImage
Card.HatTitle = CardHatTitle
Card.HatWrapper = CardHatWrapper
Card.Image = CardImage
Card.Label = CardLabel
Card.Title = CardTitle

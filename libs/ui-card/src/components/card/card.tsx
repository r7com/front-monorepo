import { CardHatImage } from './card-hat/card-hat-image'
import { CardHatTitle } from './card-hat/card-hat-title'
import { CardHatWrapper } from './card-hat/card-hat-wrapper'
import { CardImage } from './card-image/card-image'
import { CardLabel } from './card-label/card-label'
import { CardTitle } from './card-title/card-title'

export type CardProps = {
  children: React.ReactNode
  newsUrl: string
  newsTitle: string
  className?: string
  openInBlank?: boolean
}

export function Card({
  children,
  newsUrl,
  newsTitle,
  className = '',
  openInBlank = false,
}: CardProps) {
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

Card.Title = CardTitle
Card.HatImage = CardHatImage
Card.HatTitle = CardHatTitle
Card.HatWrapper = CardHatWrapper
Card.Image = CardImage
Card.Label = CardLabel
Card.Title = CardTitle

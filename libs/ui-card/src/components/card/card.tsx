import { ConditionalLink } from '@r7/ui-base-components'
import { CardHatImage } from './card-hat/card-hat-image'
import { CardHatTitle } from './card-hat/card-hat-title'
import { CardHatWrapper } from './card-hat/card-hat-wrapper'
import { CardImage } from './card-image/card-image'
import { CardLabel } from './card-label/card-label'
import { CardTitle } from './card-title/card-title'

export type CardProps = {
  children: React.ReactNode
  newsUrl?: string
  newsUrlTitle?: string
  className?: string
  openInBlank?: boolean
}

export function Card({
  children,
  newsUrl,
  newsUrlTitle,
  className = '',
  openInBlank = false,
}: CardProps) {
  return (
    <article>
      <ConditionalLink
        className={`card-flex ${className}`}
        href={newsUrl}
        title={newsUrlTitle}
        target={openInBlank ? '_blank' : undefined}
        rel={openInBlank ? 'noreferrer' : undefined}
      >
        {children}
      </ConditionalLink>
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

import { Card } from '../../card'
import { CardTitleProps } from '../../card/card-title/card-title'

export type ProportionalPhotoTitleProps = { children: React.ReactNode } & CardTitleProps

export function ProportionalPhotoTitle({
  children,
  ...cardTitleProps
}: ProportionalPhotoTitleProps) {
  return (
    <Card.Title
      className="card-text-xs card-leading-md md:card-text-xxxs md:card-leading-pill md:@[220px]:card-text-xxs md:@[350px]:card-text-xs md:@[350px]:card-leading-md"
      fontStyle="none"
      {...cardTitleProps}
    >
      {children}
    </Card.Title>
  )
}

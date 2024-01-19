import { Card } from '../../card'
import { CardTitleProps } from '../../card/card-title/card-title'

export type ProportionalPhotoTitleProps = { children: React.ReactNode } & CardTitleProps

export function ProportionalPhotoTitle({
  children,
  ...cardTitleProps
}: ProportionalPhotoTitleProps) {
  return (
    <Card.Title
      className="card-text-xxxs card-leading-xs @[300px]:card-text-xs @[300px]:card-leading-lg  @[230px]:card-text-xxs @[230px]:card-leading-md"
      fontStyle="none"
      {...cardTitleProps}
    >
      {children}
    </Card.Title>
  )
}

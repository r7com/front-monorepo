import { Card } from '../../card'
import { CardTitleProps } from '../../card/card-title/card-title'

export type ProportionalPhotoTitleProps = { children: React.ReactNode } & CardTitleProps

export function ProportionalPhotoTitle({
  children,
  ...cardTitleProps
}: ProportionalPhotoTitleProps) {
  return (
    <Card.Title fontStyle="none" {...cardTitleProps}>
      {children}
    </Card.Title>
  )
}

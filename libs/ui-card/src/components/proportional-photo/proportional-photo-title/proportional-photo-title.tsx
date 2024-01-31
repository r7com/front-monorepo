import { Card } from '../../card'
import { CardTitleProps } from '../../card/card-title/card-title'
import { ProportionalPhotoTitleVariants, variants } from './proportional-photo-title-variants'

export type ProportionalPhotoTitleProps = { children: React.ReactNode } & CardTitleProps

export function ProportionalPhotoTitle({
  children,
  fontSize,
  ...cardTitleProps
}: ProportionalPhotoTitleProps & ProportionalPhotoTitleVariants) {
  return (
    <Card.Title className={variants({ fontSize })} fontStyle="none" {...cardTitleProps}>
      {children}
    </Card.Title>
  )
}

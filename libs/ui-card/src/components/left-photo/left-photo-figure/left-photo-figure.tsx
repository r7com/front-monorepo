import { Card } from '../../card'
import { CardFigureProps } from '../../card/card-figure/card-figure'
import { LeftPhotoFigureVariants, variants } from './left-photo-figure.variants'

export const LeftPhotoFigure = ({
  children,
  imgSize,
  ...figureProps
}: { children: React.ReactNode } & LeftPhotoFigureVariants & CardFigureProps) => {
  return (
    <Card.Figure className={variants({ imgSize })} {...figureProps}>
      {children}
    </Card.Figure>
  )
}

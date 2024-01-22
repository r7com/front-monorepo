import { Card } from '../../card'
import { CardFigureProps } from '../../card/card-figure/card-figure'

export const LeftPhotoFigure = ({
  children,
  ...figureProps
}: { children: React.ReactNode } & CardFigureProps) => {
  return (
    <Card.Figure className="card-flex-shrink-0 card-h-fit card-mb-xxxs" {...figureProps}>
      {children}
    </Card.Figure>
  )
}

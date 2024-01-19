import { Card } from '../../card'
import { CardFigureProps } from '../../card/card-figure/card-figure'

export type ProportionalPhotoFigure = { children: React.ReactNode } & CardFigureProps

export function ProportionalPhotoFigure({ children, ...cardFigureProps }: ProportionalPhotoFigure) {
  return (
    <Card.Figure className="card-mb-xxxs" format="landscape" {...cardFigureProps}>
      {children}
    </Card.Figure>
  )
}

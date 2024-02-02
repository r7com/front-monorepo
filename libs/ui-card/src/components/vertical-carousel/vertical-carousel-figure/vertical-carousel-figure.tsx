import { Card } from '../../card'
import { CardFigureProps } from '../../card/card-figure/card-figure'

export type VerticalCarouselFigureProps = {
  children: React.ReactNode
}

export function VerticalCarouselFigure({
  children,
  ...props
}: VerticalCarouselFigureProps & CardFigureProps) {
  return (
    <Card.Figure
      className="card-w-full card-h-full [&>img]:card-w-full [&>img]:card-h-full [&>img]:card-object-cover"
      format="custom"
      shadow
      shadowFrom="0%"
      {...props}
    >
      {children}
    </Card.Figure>
  )
}

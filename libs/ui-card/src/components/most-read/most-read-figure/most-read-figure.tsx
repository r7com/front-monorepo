import { Card } from '../../card'

type MostReadFigureProps = {
  children: React.ReactNode
}

export function MostReadFigure({ children }: MostReadFigureProps) {
  return (
    <Card.Figure format="custom" className="card-block card-w-[141px] card-mt-xxxs">
      {children}
    </Card.Figure>
  )
}

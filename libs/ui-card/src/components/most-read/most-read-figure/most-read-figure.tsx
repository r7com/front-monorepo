import { Card } from '../../card'

type MostReadFigureProps = {
  children: React.ReactNode
}

export function MostReadFigure({ children }: MostReadFigureProps) {
  return <Card.Figure className="card-block card-mb-xxxs">{children}</Card.Figure>
}

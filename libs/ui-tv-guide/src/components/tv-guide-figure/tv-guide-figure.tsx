import { Card } from '@r7/ui-card'

type TvGuideFigureProps = {
  children: React.ReactNode
}

export function TvGuideFigure({ children }: TvGuideFigureProps) {
  return <Card.Figure format="custom">{children}</Card.Figure>
}

import { Card } from '../../card'

type MostReadTitleProps = {
  children: React.ReactNode
}

export function MostReadTitle({ children }: MostReadTitleProps) {
  return (
    <Card.Title as="h4" fontStyle="none" color="low" className="card-font-semibold card-mb-xxxs">
      {children}
    </Card.Title>
  )
}

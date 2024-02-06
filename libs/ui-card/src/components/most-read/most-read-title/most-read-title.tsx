import { Card } from '../../card'

type MostReadTitleProps = {
  children: React.ReactNode
}

export function MostReadTitle({ children }: MostReadTitleProps) {
  return (
    <Card.Title
      as="h4"
      fontStyle="none"
      className="card-text-neutral-low-500 card-font-semibold card-mb-xxxs"
    >
      {children}
    </Card.Title>
  )
}

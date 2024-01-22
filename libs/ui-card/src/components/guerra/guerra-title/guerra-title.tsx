import { Card } from '../../card'
import { CardTitleProps } from '../../card/card-title/card-title'

export const GuerraTitle = ({ children, ...cardTitleProps }: CardTitleProps) => {
  return (
    <Card.Title
      className="card-text-md @[1000px]:card-text-xxl"
      color="high"
      fontStyle="none"
      {...cardTitleProps}
    >
      {children}
    </Card.Title>
  )
}

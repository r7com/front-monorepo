import { Card } from '../../card'
import { CardTitleProps } from '../../card/card-title/card-title'

export type VerticalCarouselTitleProps = {
  children: React.ReactNode
}

export function VerticalCarouselTitle({
  children,
  ...props
}: VerticalCarouselTitleProps & CardTitleProps) {
  return (
    <Card.Title
      className="card-text-little md:card-text-xxxs card-font-bold"
      color="high"
      fontStyle="none"
      {...props}
    >
      {children}
    </Card.Title>
  )
}

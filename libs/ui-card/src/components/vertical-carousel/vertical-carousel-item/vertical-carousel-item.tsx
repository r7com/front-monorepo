import { Card } from '../../card'

export type VerticalCarouselItemProps = {
  children: React.ReactNode
}

export function VerticalCarouselItem({ children }: VerticalCarouselItemProps) {
  return (
    <Card className="card-relative card-w-[124px] card-h-[220px] md:card-w-[183px] md:card-h-[326px] card-flex card-items-center card-shrink-0">
      {children}
    </Card>
  )
}

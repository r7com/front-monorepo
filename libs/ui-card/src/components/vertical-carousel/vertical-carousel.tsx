import { VerticalCarouselFigure } from './vertical-carousel-figure'
import { getVerticalCarouselArrow } from './vertical-carousel-arrow'
import { VerticalCarouselScrollContainer } from './vertical-carousel-scroll-container'
import { VerticalCarouselTitle } from './vertical-carousel-title'
import { VerticalCarouselTextWrapper } from './vertical-carousel-text-wrapper'
import { VerticalCarouselItem } from './vertical-carousel-item'

export type VerticalCarouselProps = {
  children: React.ReactNode
}

export function VerticalCarousel({ children }: VerticalCarouselProps) {
  return (
    <div className="card-relative card-w-full card-flex card-items-center card-p-xxxs">
      {children}
    </div>
  )
}

VerticalCarousel.Item = VerticalCarouselItem
VerticalCarousel.ScrollContainer = VerticalCarouselScrollContainer
VerticalCarousel.Figure = VerticalCarouselFigure
VerticalCarousel.TextWrapper = VerticalCarouselTextWrapper
VerticalCarousel.Title = VerticalCarouselTitle
VerticalCarousel.ArrowRight = getVerticalCarouselArrow({ direction: 'right' })
VerticalCarousel.ArrowLeft = getVerticalCarouselArrow({ direction: 'left' })

import { VerticalCarouselArrowVariants, variants } from './vertical-carousel-arrow.variants'
import { SvgIcon } from '@r7/ui-base-components'

export function getVerticalCarouselArrow({ direction = 'right' }: VerticalCarouselArrowVariants) {
  return ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { container, icon } = variants({ className, direction })

    return (
      <div role="button" className={container({ className })} {...props}>
        <SvgIcon
          iconName={direction === 'right' ? 'chevron-right' : 'chevron-left'}
          size="small"
          className={icon()}
        />
      </div>
    )
  }
}

import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    container:
      'card-z-10 card-absolute card-w-xs card-h-xs card-bg-editorial-color card-rounded-circular card-flex card-items-center card-justify-center card-shadow-level1 card-shadow-dark-low-600',
    icon: 'card-fill-neutral-high-400',
  },
  variants: {
    direction: {
      left: {
        container: 'card-left-0',
      },
      right: {
        container: 'card-right-0',
      },
    },
  },
})

export type VerticalCarouselArrowVariants = VariantProps<typeof variants>

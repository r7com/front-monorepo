import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'tv-min-w-xxxs tv-inline-block tv-text-center tv-text-neutral-high-400 tv-p-[1px] tv-mr-quark tv-rounded-md tv-text-little tv-font-bold tv-uppercase',
  variants: {
    rating: {
      default: 'tv-bg-rating-default',
      L: 'tv-bg-rating-free',
      a10: 'tv-bg-rating-a10',
      a12: 'tv-bg-rating-a12',
      a14: 'tv-bg-rating-a14',
      a16: 'tv-bg-rating-a16',
      a18: 'tv-bg-rating-a18',
      '10': 'tv-bg-rating-10',
      '12': 'tv-bg-rating-12',
      '14': 'tv-bg-rating-14',
      '16': 'tv-bg-rating-16',
      '18': 'tv-bg-rating-18',
    },
  },
})

export type TvGuideRatingVariants = VariantProps<typeof variants>

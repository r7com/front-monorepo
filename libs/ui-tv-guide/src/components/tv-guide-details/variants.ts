import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'tv-min-w-xxxs tv-inline-block tv-text-center tv-text-neutral-high-400 tv-p-[1px] tv-mr-quark tv-rounded-md tv-text-little tv-font-bold tv-uppercase',
  variants: {
    rating: {
      default: 'tv-bg-[#4565af]',
      L: 'tv-bg-agerating-livre-500',
      a10: 'tv-bg-agerating-10anos-500',
      a12: 'tv-bg-agerating-12anos-500',
      a14: 'tv-bg-agerating-14anos-500',
      a16: 'tv-bg-agerating-16anos-500',
      a18: 'tv-bg-agerating-18anos-500',
      '10': 'tv-bg-agerating-10anos-500',
      '12': 'tv-bg-agerating-12anos-500',
      '14': 'tv-bg-agerating-14anos-500',
      '16': 'tv-bg-agerating-16anos-500',
      '18': 'tv-bg-agerating-18anos-500',
    },
  },
})

export type TvGuideRatingVariants = VariantProps<typeof variants>

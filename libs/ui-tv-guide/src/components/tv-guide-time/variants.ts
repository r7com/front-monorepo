import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'tv-text-little md:tv-text-xxs tv-text-dark-high-600',
  variants: {
    hiddenOnMobile: {
      true: 'md:tv-inline tv-hidden',
      false: '',
    },
  },
})

export type TvGuideTimeVariants = VariantProps<typeof variants>

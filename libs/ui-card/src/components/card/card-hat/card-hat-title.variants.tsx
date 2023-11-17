import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'card-text-xxxs card-font-open-sans card-uppercase',
  variants: {
    color: {
      high: 'card-text-neutral-high-400',
      low: 'card-text-neutral-low-500',
      'high-bold': 'card-text-neutral-high-400 card-font-bold',
    },
  },
})

export type CardHatTitleVariants = VariantProps<typeof variants>

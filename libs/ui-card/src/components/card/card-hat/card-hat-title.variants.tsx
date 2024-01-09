import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'card-block card-font-open-sans card-uppercase',
  variants: {
    color: {
      high: 'card-text-neutral-high-400',
      low: 'card-text-neutral-low-500',
      'high-bold': 'card-text-neutral-high-400 card-font-bold',
    },
    size: {
      medium: 'card-text-little  md:card-text-xxxs',
      small: 'card-text-little ',
    },
  },
})

export type CardHatTitleVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'text-xxxs font-open-sans uppercase',
  variants: {
    color: {
      high: 'text-neutral-high-400',
      low: 'text-neutral-low-500',
      'high-bold': 'text-neutral-high-400 font-bold',
    },
  },
})

export type CardHatTitleVariants = VariantProps<typeof variants>

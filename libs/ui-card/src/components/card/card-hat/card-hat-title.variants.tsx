import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'text-xxxs font-open-sans uppercase',
  variants: {
    color: {
      high: 'text-neutral-high-400',
      low: 'text-neutral-low-500',
    },
  },
})

export type CardHatTitleVariants = VariantProps<typeof variants>

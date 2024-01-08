import { createVariants, VariantProps } from '../../utils'

export const variants = createVariants({
  base: 'base-font-primary dark:base-text-neutral-high-400',
  variants: {
    size: {
      large:
        'base-text-xxs base-font-bold base-leading-md sm:base-text-md sm:base-font-medium sm:base-leading-lg',
      small:
        'base-text-xxxs base-font-normal base-leading-sm sm:base-font-medium sm:base-leading-xs',
    },
    color: {
      neutralLow: 'base-text-neutral-low-500',
      neutralHigh: 'base-text-neutral-high-400',
    },
  },
})
export type SubheadingVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans dark:text-neutral-high-400',
  variants: {
    size: {
      large: 'text-xxs font-bold leading-md sm:text-md sm:font-medium sm:leading-lg',
      small: 'text-xxxs font-normal leading-sm sm:font-medium sm:leading-xs',
    },
    color: {
      neutralLow: 'text-neutral-low-500',
      neutralHigh: 'text-neutral-high-400',
    },
  },
})
export type SubheadingVariants = VariantProps<typeof variants>

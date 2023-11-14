import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans dark:text-neutral-high-400',
  variants: {
    size: {
      large: 'text-xl font-semibold leading-huge sm:text-xxl sm:leading-giant',
      medium: 'text-md font-normal leading-lg sm:font-medium',
      small: 'text-xxs font-medium leading-md',
    },
    color: {
      neutralLow: 'text-neutral-low-500',
      neutralHigh: 'text-neutral-high-400',
    },
  },
})
export type HeadingVariants = VariantProps<typeof variants>

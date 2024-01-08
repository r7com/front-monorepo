import { createVariants, VariantProps } from '../../tailwind-variants'

export const variants = createVariants({
  base: 'base-font-primary dark:base-text-neutral-high-400',
  variants: {
    size: {
      large: 'base-text-xl base-font-semibold base-leading-huge sm:base-text-xxl',
      medium: 'base-text-md base-font-normal base-leading-8 sm:base-font-semibold base-',
      small: 'base-font-semibold base-text-xxs base-leading-6',
    },
    color: {
      neutralLow: 'base-text-neutral-low-500',
      neutralHigh: 'base-text-neutral-high-400',
    },
  },
})
export type HeadingVariants = VariantProps<typeof variants>

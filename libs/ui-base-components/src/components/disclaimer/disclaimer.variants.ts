import { VariantProps, createVariants } from '../../utils'

export const variants = createVariants({
  base: 'base-px-xxxs base-py-nano base-text-xxxs base-rounded-md base-bg-editorial-color',
  variants: {
    color: {
      high: 'base-text-neutral-high-400',
      low: 'base-text-neutral-low-500',
    },
  },
})

export type DisclaimerVariants = VariantProps<typeof variants>

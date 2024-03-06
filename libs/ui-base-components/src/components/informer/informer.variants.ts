import { VariantProps, createVariants } from '../../utils'

export const variants = createVariants({
  base: 'base-px-xxxs base-py-nano base-text-xxxs base-rounded-md',
  variants: {
    color: {
      high: 'base-text-neutral-high-400',
      low: 'base-text-neutral-low-500',
    },
  },
})

export type InformerVariants = VariantProps<typeof variants>

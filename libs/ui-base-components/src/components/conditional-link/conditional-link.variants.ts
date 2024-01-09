import { createVariants, VariantProps } from '../../utils'

export const variants = createVariants({
  variants: {
    width: {
      default: '',
      fit: 'base-flex base-w-fit',
    },
  },
})

export type ConditionalLinkVariants = VariantProps<typeof variants>

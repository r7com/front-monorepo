import { tv, VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    inputSlot: '',
    labelSlot: '',
    wrapperSlot: '',
  },
  variants: {},
})

export type InputVariants = VariantProps<typeof variants>

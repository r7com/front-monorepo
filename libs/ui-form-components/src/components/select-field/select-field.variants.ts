import { tv, VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    selectSlot: '',
    labelSlot: '',
    wrapperSlot: '',
  },
  variants: {},
})

export type SelectVariants = VariantProps<typeof variants>

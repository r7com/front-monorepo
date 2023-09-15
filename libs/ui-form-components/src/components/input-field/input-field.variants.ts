import { createVariants, VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  slots: {
    inputSlot: '',
    labelSlot: '',
    wrapperSlot: '',
  },
  variants: {},
})

export type InputVariants = VariantProps<typeof variants>

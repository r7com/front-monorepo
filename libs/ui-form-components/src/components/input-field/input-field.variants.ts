import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    inputSlot: '',
    labelSlot: '',
    wrapperSlot: '',
  },
  variants: {},
})

export type InputVariants = VariantProps<typeof variants>

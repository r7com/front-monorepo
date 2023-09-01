import { createVariants, VariantProps } from '@r7-jarvics/utils'

export const variants = createVariants({
  slots: {
    selectSlot: '',
    labelSlot: '',
    wrapperSlot: '',
  },
  variants: {},
})

export type SelectVariants = VariantProps<typeof variants>

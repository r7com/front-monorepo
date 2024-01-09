import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    selectSlot: '',
    labelSlot: '',
    wrapperSlot: '',
  },
  variants: {},
})

export type SelectVariants = VariantProps<typeof variants>

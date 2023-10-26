import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    item: '',
    list: '',
  },
})

export type AccessibilityBarVariants = VariantProps<typeof variants>

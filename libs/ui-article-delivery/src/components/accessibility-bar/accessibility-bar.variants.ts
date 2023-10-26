import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    item: 'flex',
    list: 'flex flex-col md:flex-row md:items-center md:justify-between',
  },
})

export type AccessibilityBarVariants = VariantProps<typeof variants>

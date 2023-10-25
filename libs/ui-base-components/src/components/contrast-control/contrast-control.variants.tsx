import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans',
})
export type ContrastControlVariants = VariantProps<typeof variants>

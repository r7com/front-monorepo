import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'base-transition-all base-rounded-sm base-border-hairline',
})

export type SvgIconVariants = VariantProps<typeof variants>

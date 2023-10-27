import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  variants: {
    type: {
      warning: 'bg-feedback-warning-400 rounded-md overflow-hidden p-nano inline-flex',
    },
  },
})

export type CardHatWrapperVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '@r7-jarvics/utils'

export const variants = createVariants({
  slots: {
    iconColor: 'w-xxxs h-xxxs min-w-max min-h-max m-nano',
    textColor: 'text-xxxs',
  },
  variants: {
    variant: {
      success: {
        iconColor: 'fill-feedback-success-400',
        textColor: 'text-feedback-success-400',
      },
      error: {
        iconColor: 'fill-feedback-warning-400',
        textColor: 'text-feedback-warning-400',
      },

      helper: {
        iconColor: 'fill-feedback-helper-400',
        textColor: 'text-feedback-helper-400',
      },
      info: {
        iconColor: 'fill-brand-primary-400',
        textColor: 'text-brand-primary-400',
      },
      waiting: {
        iconColor: 'fill-brand-primary-400',
        textColor: 'text-brand-primary-400',
      },
    },
  },
})

export type CardStatusVariants = VariantProps<typeof variants>

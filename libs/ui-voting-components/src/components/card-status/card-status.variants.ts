import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    iconStyle: 'w-xxxs h-xxxs min-w-max min-h-max m-nano',
    textStyle: 'text-xxxs',
  },
  variants: {
    variant: {
      success: {
        iconStyle: 'fill-feedback-success-400',
        textStyle: 'text-feedback-success-400',
      },
      error: {
        iconStyle: 'fill-feedback-warning-400',
        textStyle: 'text-feedback-warning-400',
      },

      helper: {
        iconStyle: 'fill-feedback-helper-400',
        textStyle: 'text-feedback-helper-400',
      },
      info: {
        iconStyle: 'fill-brand-primary-400',
        textStyle: 'text-brand-primary-400',
      },
      waiting: {
        iconStyle: 'fill-brand-primary-400',
        textStyle: 'text-brand-primary-400',
      },
    },
  },
})

export type CardStatusVariants = VariantProps<typeof variants>

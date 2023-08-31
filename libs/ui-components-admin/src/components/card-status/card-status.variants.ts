import { createVariants, VariantProps } from '@r7-front-monorepo/utils'

export const variants = createVariants({
  slots: {
    iconColorVariant: 'w-xxxs h-xxxs min-w-max min-h-max m-nano',
    textVariant: '!text-xxxs',
  },
  variants: {
    variant: {
      success: {
        iconColorVariant: 'fill-feedback-success-400',
        textVariant: 'text-feedback-success-400',
      },
      error: {
        iconColorVariant: 'fill-feedback-warning-400',
        textVariant: 'text-feedback-warning-400',
      },

      helper: {
        iconColorVariant: 'fill-feedback-helper-400',
        textVariant: 'text-feedback-helper-400',
      },
      info: {
        iconColorVariant: 'fill-brand-primary-400',
        textVariant: 'text-brand-primary-400',
      },
      waiting: {
        iconColorVariant: 'fill-brand-primary-400',
        textVariant: 'text-brand-primary-400',
      },
    },
  },
})

export type CardStatusVariants = VariantProps<typeof variants>

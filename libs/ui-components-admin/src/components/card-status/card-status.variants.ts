import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    iconVariant: 'check',
    iconColorVariant: 'w-xxxs h-xxxs min-w-max min-h-max m-nano',
    textVariant: '!text-xxxs',
  },
  variants: {
    variant: {
      success: {
        iconVariant: 'circle-check',
        iconColorVariant: 'fill-feedback-success-400',
        textVariant: 'text-feedback-success-400',
      },
      error: {
        iconVariant: 'circle-error',
        iconColorVariant: 'fill-feedback-warning-400',
        textVariant: 'text-feedback-warning-400',
      },

      helper: {
        iconVariant: 'circle-info',
        iconColorVariant: 'fill-feedback-helper-400',
        textVariant: 'text-feedback-helper-400',
      },
      info: {
        iconVariant: 'check',
        iconColorVariant: 'fill-brand-primary-400',
        textVariant: 'text-brand-primary-400',
      },
      waiting: {
        iconVariant: 'waiting',
        iconColorVariant: 'fill-brand-primary-400',
        textVariant: 'text-brand-primary-400',
      },
    },
  },
})

export type CardStatusVariants = VariantProps<typeof variants>

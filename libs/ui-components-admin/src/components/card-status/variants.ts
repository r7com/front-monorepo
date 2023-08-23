import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    iconVariant: 'w-xxxs h-xxxs min-w-max min-h-max m-nano',
    textVariant: '!text-xxxs',
  },
  variants: {
    variant: {
      success: {
        iconVariant: 'fill-feedback-success-400',
        textVariant: 'text-feedback-success-400',
      },
      error: {
        iconVariant: 'fill-feedback-warning-400',
        textVariant: 'text-feedback-warning-400',
      },

      helper: {
        iconVariant: 'fill-feedback-helper-400',
        textVariant: 'text-feedback-helper-400',
      },
      info: {
        iconVariant: 'fill-brand-primary-400',
        textVariant: 'text-brand-primary-400',
      },
      waiting: {
        iconVariant: 'fill-brand-primary-400',
        textVariant: 'text-brand-primary-400',
      },
    },
  },
})

export type CardStatusVariants = VariantProps<typeof variants>

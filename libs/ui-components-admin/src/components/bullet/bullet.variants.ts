import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    base: 'flex items-center gap-quark p-xxxs',
    dotVariant: 'w-nano h-nano rounded-circular',
    textVariant: '!text-dark-high-500 font-open-sans text-xxxs',
  },
  variants: {
    variant: {
      waiting: {
        dotVariant: 'bg-brand-primary-500',
      },
      closed: {
        dotVariant: 'bg-feedback-warning-500',
      },
      paused: {
        dotVariant: 'bg-feedback-helper-500',
      },
      published: {
        dotVariant: 'bg-feedback-success-500',
      },
    },
  },
})

export type BulletVariants = VariantProps<typeof variants>

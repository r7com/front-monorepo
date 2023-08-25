import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    root: 'fixed flex items-stretch overflow-hidden sm:w-[560px] min-h-[72px] sm:right-xxs sm:left-auto left-nano right-nano rounded-md bg-neutral-low-500 transition-all',
    iconContainer: 'flex items-center justify-center w-sm fill-dark-high-400',
  },
  variants: {
    open: {
      true: {
        root: 'sm:bottom-xxs bottom-nano visible opacity-[1]',
      },
      false: {
        root: '-bottom-[1000px] invisible opacity-transparent',
      },
    },
    type: {
      informative: {
        iconContainer: 'bg-brand-primary-500',
      },
      positive: {
        iconContainer: 'bg-feedback-success-500',
      },
      alert: {
        iconContainer: 'bg-feedback-helper-500',
      },
      error: {
        iconContainer: 'bg-feedback-warning-500',
      },
    },
  },
})

export type SnackbarVariants = VariantProps<typeof variants>

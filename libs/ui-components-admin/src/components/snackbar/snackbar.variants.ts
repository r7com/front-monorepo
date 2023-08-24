import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    root: 'fixed flex items-stretch overflow-hidden sm:w-[560px] min-h-[72px] sm:bottom-xxs sm:right-xxs sm:left-auto left-nano right-nano bottom-nano rounded-md bg-neutral-low-500',
    iconContainer: 'flex items-center justify-center w-sm fill-dark-high-400',
  },
  variants: {
    open: {
      true: {
        root: 'visible opacity-[1] motion-safe:transition-all',
      },
      false: {
        root: 'invisible opacity-[0] motion-safe:transition-all',
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

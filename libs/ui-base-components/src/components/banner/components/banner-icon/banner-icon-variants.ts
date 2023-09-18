import { createVariants, type VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'w-fit flex items-center justify-center p-xxs rounded-lg',
  variants: {
    type: {
      informative: 'bg-feedback-informative-500',
      positive: 'bg-feedback-success-500',
      alert: 'bg-feedback-helper-500',
      error: 'bg-feedback-warning-500',
      custom: '[&>svg]:fill-dark-low-400 dark:[&>svg]:fill-neutral-high-400',
    },
  },
  compoundVariants: [
    {
      type: ['informative', 'positive', 'alert', 'error'],
      className: '[&>svg]:fill-neutral-high-400',
    },
  ],
})

export type BannerIconVariants = VariantProps<typeof variants>

import { createVariants, type VariantProps } from '@r7-jarvics/utils'

export const variants = createVariants({
  base: 'flex items-center justify-center p-xxs rounded-lg fill-neutral-high-400',
  variants: {
    type: {
      informative: 'bg-feedback-informative-500',
      positive: 'bg-feedback-success-500',
      alert: 'bg-feedback-helper-500',
      error: 'bg-feedback-warning-500',
      custom: '',
    },
  },
})

export type BannerIconVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'card-font-open-sans card-font-semibold',
  variants: {
    fontStyle: {
      'heading-level-1': 'card-text-md md:card-text-xxl',
      'heading-level-2': 'card-text-sm md:card-text-md',
      'heading-level-3': 'card-text-xxs md:card-text-sm',
      'heading-level-4': 'card-text-xxxs md:card-text-xxs',
      none: '',
    },
    color: {
      high: 'card-text-neutral-high-400',
      low: 'card-text-neutral-low-500',
    },
  },
})

export type CardTitleVariants = VariantProps<typeof variants>

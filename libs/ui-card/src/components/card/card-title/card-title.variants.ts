import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'card-font-open-sans card-font-semibold',
  variants: {
    fontStyle: {
      'heading-level-1': 'text-md md:text-xxl',
      'heading-level-2': 'text-sm md:text-md',
      'heading-level-3': 'text-xxs md:text-sm',
      'heading-level-4': 'text-xxxs md:text-xxs',
    },
    color: {
      high: 'card-text-neutral-high-400',
      low: 'card-text-neutral-low-500',
    },
  },
})

export type CardTitleVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans font-semibold',
  variants: {
    fontStyle: {
      'heading-level-1': 'text-md md:text-xxl',
      'heading-level-2': 'text-sm md:text-md',
      'heading-level-3': 'text-sm',
      'heading-level-4': 'text-xxs',
      'heading-level-5': 'text-xxxs',
    },
    color: {
      high: 'text-neutral-high-400',
      low: 'text-neutral-low-500',
    },
  },
})

export type CardTitleVariants = VariantProps<typeof variants>

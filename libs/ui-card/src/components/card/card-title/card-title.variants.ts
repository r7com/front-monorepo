import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans text-neutral-low-500 dark:text-neutral-high-400 mb-xxxs font-semibold',
  variants: {
    fontStyle: {
      'heading-level-1': '',
      'heading-level-2': 'text-xxl',
      'heading-level-3': 'text-sm',
      'heading-level-4': '',
      'heading-level-5': '',
      'heading-level-6': '',
    },
  },
})

export type CardTitleVariants = VariantProps<typeof variants>

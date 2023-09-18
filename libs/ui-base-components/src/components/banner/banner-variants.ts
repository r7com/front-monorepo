import { createVariants, type VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'relative rounded-lg p-nano flex gap-xxs bg-dark-high-400 dark:bg-dark-low-400',
  variants: {
    onClose: {
      false: 'max-tablet:flex-wrap',
    },
  },
})

export type BannerVariants = VariantProps<typeof variants>

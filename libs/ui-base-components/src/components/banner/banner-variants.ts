import { createVariants, type VariantProps } from '@r7-jarvics/utils'

export const variants = createVariants({
  base: 'relative bg-dark-low-400 rounded-lg p-nano flex gap-xxs dark:bg-dark-high-400',
  variants: {
    onClose: {
      false: 'max-tablet:flex-wrap',
    },
  },
})

export type BannerVariants = VariantProps<typeof variants>

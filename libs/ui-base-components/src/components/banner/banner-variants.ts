import { createVariants, type VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'relative rounded-lg p-xxxs flex justify-center gap-xxxs bg-dark-high-400 dark:bg-dark-low-400',
  variants: {
    onClose: {
      false: 'flex-wrap md:flex-nowrap',
    },
  },
})

export type BannerVariants = VariantProps<typeof variants>

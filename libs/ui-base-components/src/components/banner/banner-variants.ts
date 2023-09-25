import { createVariants, type VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'relative rounded-lg p-xxxs flex flex-col md:flex-row justify-center gap-xxxs bg-dark-high-400 dark:bg-dark-low-400',
})

export type BannerVariants = VariantProps<typeof variants>

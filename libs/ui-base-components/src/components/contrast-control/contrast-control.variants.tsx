import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'md:w-xs md:h-xs md:text-sm rounded-md w-sm h-sm text-md bg-neutral-high-600/medium text-agerating-18anos-500 font-semibold flex items-center justify-center border-none',
})
export type ContrastControlVariants = VariantProps<typeof variants>

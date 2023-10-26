import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'p-quark mr-xxxs md:mr-nano md:w-xs md:h-xs md:text-sm rounded-md w-sm h-sm text-md bg-neutral-high-600/medium text-agerating-18anos-500 font-semibold flex items-center justify-center border-none dark:border-[1px] dark:border-solid dark:border-neutral-high-400 dark:bg-agerating-18anos-500 dark:text-neutral-high-400',
})
export type ContrastControlVariants = VariantProps<typeof variants>

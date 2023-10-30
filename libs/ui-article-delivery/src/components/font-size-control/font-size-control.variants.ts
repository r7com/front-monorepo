import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    increaseSlot:
      'md:mr-nano mr-xxxs md:w-xs md:h-xs md:text-sm rounded-md w-sm h-sm text-md bg-neutral-high-600/medium text-agerating-18anos-500 font-semibold flex items-center justify-center border-none hover:bg-[#f1f1f1] dark:border-[1px] dark:border-solid dark:border-neutral-high-400 dark:bg-agerating-18anos-500 dark:text-neutral-high-400',
    decreaseSlot:
      'md:w-xs md:h-xs md:text-sm rounded-md w-sm h-sm text-md bg-neutral-high-600/medium text-agerating-18anos-500 font-semibold flex items-center justify-center border-none hover:bg-[#f1f1f1] dark:border-[1px] dark:border-solid dark:border-neutral-high-400 dark:bg-agerating-18anos-500 dark:text-neutral-high-400',
  },
})

export type FontSizeControlVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    increaseSlot:
      'md:article-mr-nano article-mr-xxxs md:article-w-xs md:article-h-xs md:article-text-sm article-rounded-md article-w-sm article-h-sm article-text-md article-bg-neutral-high-600/medium article-text-agerating-18anos-500 article-font-semibold article-flex article-items-center article-justify-center article-border-none hover:article-bg-[#f1f1f1] dark:article-border-[1px] dark:article-border-solid dark:article-border-neutral-high-400 dark:article-bg-agerating-18anos-500 dark:article-text-neutral-high-400',
    decreaseSlot:
      'md:article-w-xs md:article-h-xs md:article-text-sm article-rounded-md article-w-sm article-h-sm article-text-md article-bg-neutral-high-600/medium article-text-agerating-18anos-500 article-font-semibold article-flex article-items-center article-justify-center article-border-none hover:article-bg-[#f1f1f1] dark:article-border-[1px] dark:article-border-solid dark:article-border-neutral-high-400 dark:article-bg-agerating-18anos-500 dark:article-text-neutral-high-400',
  },
})

export type FontSizeControlVariants = VariantProps<typeof variants>

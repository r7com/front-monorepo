import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'article-p-quark article-mr-xxxs md:article-mr-nano md:article-w-xs md:article-h-xs md:article-text-sm article-rounded-md article-w-sm article-h-sm article-text-md article-bg-neutral-high-600/medium article-text-agerating-18anos-500 article-font-semibold article-flex article-items-center article-justify-center article-border-none dark:article-border-[1px] dark:article-border-solid dark:article-border-neutral-high-400 dark:article-bg-agerating-18anos-500 dark:article-text-neutral-high-400',
})
export type ContrastControlVariants = VariantProps<typeof variants>

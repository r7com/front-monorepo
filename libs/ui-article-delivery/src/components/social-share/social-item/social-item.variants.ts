import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'article-flex article-justify-center article-items-center article-w-sm sm:article-w-xs article-h-sm sm:article-h-xs article-border-hairline dark:article-border-[1px] dark:article-border-solid dark:article-border-neutral-high-400 dark:article-bg-agerating-18anos-500 dark:article-text-neutral-high-400',
  variants: {
    shape: {
      circle: 'article-bg-neutral-low-400 article-rounded-circular',
      square: 'article-border-dark-high-500 article-rounded-md',
    },
  },
})

export type SocialItemVariants = VariantProps<typeof variants>

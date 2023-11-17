import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'article-flex article-justify-center article-items-center article-w-sm sm:article-w-xs article-h-sm sm:article-h-xs article-border-hairline',
  variants: {
    shape: {
      circle: 'article-bg-neutral-low-400 article-rounded-circular',
      square: 'article-border-dark-high-500 article-rounded-md',
    },
  },
})

export type SocialItemVariants = VariantProps<typeof variants>

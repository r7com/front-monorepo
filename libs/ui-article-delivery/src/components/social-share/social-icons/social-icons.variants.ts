import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    facebookSlot:
      'article-w-xs sm:article-w-xxs article-h-w-xs sm:article-h-xxs dark:article-fill-neutral-high-400',
    linkedinSlot:
      'article-w-xs sm:article-w-xxs article-h-w-xs sm:article-h-xxs dark:article-fill-neutral-high-400',
    shareSlot:
      'article-w-xs sm:article-w-xxs article-h-w-xs sm:article-h-xxs dark:article-fill-neutral-high-400',
    twitterSlot:
      'article-w-xs sm:article-w-xxs article-h-w-xs sm:article-h-xxs dark:article-fill-neutral-high-400',
    whatsappSlot:
      'article-w-xs sm:article-w-xxs article-h-w-xs sm:article-h-xxs dark:article-fill-neutral-high-400',
    googleNewsSlot:
      'article-w-xs sm:article-w-xxs article-h-w-xs sm:article-h-xxs dark:article-grayscale dark:hover:article-grayscale',
  },
  variants: {
    color: {
      primary: {
        facebookSlot: 'article-fill-social-facebook',
        linkedinSlot: 'article-fill-social-linkedin',
        shareSlot: 'article-fill-[#556373]',
        twitterSlot: 'article-fill-social-twitter',
        whatsappSlot: 'article-fill-social-whatsapp',
      },
      secondary: {
        facebookSlot: 'article-fill-neutral-high-400',
        linkedinSlot: 'article-fill-neutral-high-400',
        shareSlot: 'article-fill-neutral-high-400',
        twitterSlot: 'article-fill-neutral-high-400',
        whatsappSlot: 'article-fill-neutral-high-400',
      },
    },
  },
})

export type SocialIconVariants = VariantProps<typeof variants>

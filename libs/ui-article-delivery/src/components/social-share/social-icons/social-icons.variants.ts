import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    facebookSlot: 'w-xs sm:w-xxs h-w-xs sm:h-xxs',
    linkedinSlot: 'w-xs sm:w-xxs h-w-xs sm:h-xxs',
    shareSlot: 'w-xs sm:w-xxs h-w-xs sm:h-xxs',
    twitterSlot: 'w-xs sm:w-xxs h-w-xs sm:h-xxs',
    whatsappSlot: 'w-xs sm:w-xxs h-w-xs sm:h-xxs',
    googleNewsSlot: 'w-xs sm:w-xxs h-w-xs sm:h-xxs',
  },
  variants: {
    color: {
      primary: {
        facebookSlot: 'fill-social-facebook',
        linkedinSlot: 'fill-social-linkedin',
        shareSlot: 'fill-[#556373]',
        twitterSlot: 'fill-social-twitter',
        whatsappSlot: 'fill-social-whatsapp',
      },
      secondary: {
        facebookSlot: 'fill-neutral-high-400',
        linkedinSlot: 'fill-neutral-high-400',
        shareSlot: 'fill-neutral-high-400',
        twitterSlot: 'fill-neutral-high-400',
        whatsappSlot: 'fill-neutral-high-400',
      },
    },
  },
})

export type SocialIconVariants = VariantProps<typeof variants>

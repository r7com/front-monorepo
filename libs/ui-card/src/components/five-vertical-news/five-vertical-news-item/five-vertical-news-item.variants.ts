import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    articleSlot: 'card-flex card-flex-col',
    imageSlot: 'card-min-w-[113px]',
    titleSlot: 'card-flex-1 card-text-xxs card-leading-xs',
  },

  variants: {
    isMain: {
      true: {
        articleSlot: 'lg:card-gap-y-nano',
        titleSlot: 'lg:card-leading-xxs',
      },
      false: {
        articleSlot: 'lg:card-flex-row lg:card-gap-x-nano',
        imageSlot: ' lg:card-h-xl',
        titleSlot: 'lg:card-text-xxxs',
      },
    },
  },
})

export type FiveVerticalNewsItemVariants = VariantProps<typeof variants>

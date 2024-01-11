import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    figureSlot: '[&>img]:card-w-full [&>img]:card-h-full [&>img]:card-object-cover',
    cardSlot: 'card-relative',
  },
  variants: {
    layout: {
      half: {
        figureSlot: 'card-aspect-[3/2]',
      },
      vertical: {
        figureSlot: 'card-aspect-[2/3]',
      },
      auto: {
        figureSlot: 'card-aspect-[auto]',
      },
    },
    size: {
      full: {
        figureSlot: 'card-w-full card-h-full',
        cardSlot: 'card-w-full card-h-full',
      },
      fullWidth: {
        figureSlot: 'card-w-full card-h-auto',
        cardSlot: 'card-w-full card-h-auto',
      },
      fullHeight: {
        figureSlot: 'card-w-auto card-h-full',
        cardSlot: 'card-w-auto card-h-full',
      },
      auto: {
        figureSlot: 'card-w-auto card-h-auto',
        cardSlot: 'card-w-auto card-h-auto',
      },
      fit: {
        figureSlot: 'card-w-fit card-h-fit',
        cardSlot: 'card-w-fit card-h-fit',
      },
    },
    responsiveOn: {
      md: {
        figureSlot: 'md:card-aspect-[auto]',
      },
      none: '',
    },
  },
})

export type TextOverPhotoVariants = VariantProps<typeof variants>

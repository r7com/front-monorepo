import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    cardSlot: 'card-@container card-relative',
    figureSlot: '[&>img]:card-w-full [&>img]:card-h-full [&>img]:card-object-cover',
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
        cardSlot: 'card-w-full card-h-full',
        figureSlot: 'card-w-full card-h-full',
      },
      fullWidth: {
        cardSlot: 'card-w-full card-h-auto',
        figureSlot: 'card-w-full card-h-auto',
      },
      fullHeight: {
        cardSlot: 'card-w-auto card-h-full',
        figureSlot: 'card-w-auto card-h-full',
      },
      auto: {
        cardSlot: 'card-w-auto card-h-auto',
        figureSlot: 'card-w-auto card-h-auto',
      },
      fit: {
        cardSlot: 'card-w-fit card-h-fit',
        figureSlot: 'card-w-fit card-h-fit',
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

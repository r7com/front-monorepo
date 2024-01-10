import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    figure:
      'card-w-full md:card-aspect-[none] md:h-[320px] [&>img]:card-w-full [&>img]:card-h-full [&>img]:card-object-cover',
  },
  variants: {
    type: {
      half: {
        figure: 'card-aspect-[3/2]',
      },
      vertical: {
        figure: 'card-aspect-[2/3]',
      },
    },
  },
})

export type TextOverPhotoVariants = VariantProps<typeof variants>

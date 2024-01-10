import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    figure: '[&>img]:card-w-full [&>img]:card-h-full [&>img]:card-object-cover',
    card: 'card-relative',
  },
  variants: {
    layout: {
      half: {
        figure: 'card-aspect-[3/2]',
      },
      vertical: {
        figure: 'card-aspect-[2/3]',
      },
      auto: {
        figure: 'card-aspect-[auto]',
      },
    },
    size: {
      full: {
        figure: 'card-w-full card-h-full',
        card: 'card-w-full card-h-full',
      },
      fullWidth: {
        figure: 'card-w-full card-h-auto',
        card: 'card-w-full card-h-auto',
      },
      fullHeight: {
        figure: 'card-w-auto card-h-full',
        card: 'card-w-auto card-h-full',
      },
      auto: {
        figure: 'card-w-auto card-h-auto',
        card: 'card-w-auto card-h-auto',
      },
      fit: {
        figure: 'card-w-fit card-h-fit',
        card: 'card-w-fit card-h-fit',
      },
    },
    responsiveOn: {
      md: {
        figure: 'md:card-aspect-[auto]',
      },
      none: '',
    },
  },
})

export type TextOverPhotoVariants = VariantProps<typeof variants>

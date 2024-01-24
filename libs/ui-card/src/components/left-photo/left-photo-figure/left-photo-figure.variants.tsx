import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'card-flex-shrink-0 card-h-fit card-mb-xxxs card',
  variants: {
    imgSize: {
      large: '[&>img]:card-w-[160px] lg:[&>img]:card-w-[238px]',
    },
  },
})

export type LeftPhotoFigureVariants = VariantProps<typeof variants>

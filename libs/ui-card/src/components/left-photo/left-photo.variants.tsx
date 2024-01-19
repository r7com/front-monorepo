import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'card-flex card-flex-col',
  variants: {
    gapMd: {
      none: 'md:card-gap-0',
      xxxs: 'md:card-gap-xxxs',
    },
    gap: {
      none: 'card-gap-0',
      xxxs: 'card-gap-xxxs',
    },
  },
})

export type LeftPhotoVariants = VariantProps<typeof variants>

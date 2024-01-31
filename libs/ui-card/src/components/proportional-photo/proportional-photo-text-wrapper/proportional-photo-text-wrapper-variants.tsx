import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    marginBottom: {
      default: 'card-mb-0',
      doubleCall: 'card-mb-xxxs',
    },
  },
})

export type ProportionalPhotoTextWrapperVariants = VariantProps<typeof variants>

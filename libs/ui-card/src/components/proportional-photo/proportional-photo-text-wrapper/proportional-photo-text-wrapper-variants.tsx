import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    marginBottom: {
      false: 'card-mb-0',
      true: 'card-mb-xxxs',
    },
  },
})

export type ProportionalPhotoTextWrapperVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    fontSize: {
      default:
        'card-text-xxxs card-leading-xs @[300px]:card-text-xs @[300px]:card-leading-lg  @[230px]:card-text-xxs @[230px]:card-leading-md',
      doubleCall: 'card-text-xxxs card-leading-xs',
    },
  },
})

export type ProportionalPhotoTitleVariants = VariantProps<typeof variants>

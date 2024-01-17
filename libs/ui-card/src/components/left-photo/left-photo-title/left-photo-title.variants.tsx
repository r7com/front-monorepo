import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    fontSize: {
      small:
        'card-text-sm card-leading-md md:card-leading-pill md:@xs:card-leading-md md:card-text-xxs md:@xs:card-text-xxs card-mb-xxxs',
      medium:
        'card-text-sm card-leading-md md:card-leading-pill md:@xs:card-leading-md md:card-text-xxs md:@xs:card-text-xs card-mb-xxxs',
    },
  },
})

export type TitleVariants = VariantProps<typeof variants>

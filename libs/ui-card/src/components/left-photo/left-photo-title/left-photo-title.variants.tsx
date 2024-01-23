import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    fontSize: {
      small: 'card-text-xxxs card-leading-xs',
      medium: 'card-text-xxs card-leading-md',
      large:
        'sm:card-text-xxs sm:card-leading-md md:card-text-xxs md:card-leading-md lg:card-text-sm lg:card-leading-lg',
    },
  },
})

export type TitleVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    fontSize: {
      small: 'card-text-xxxs card-leading-xs',
      medium: 'card-text-xxs card-leading-md',
    },
  },
})

export type TitleVariants = VariantProps<typeof variants>

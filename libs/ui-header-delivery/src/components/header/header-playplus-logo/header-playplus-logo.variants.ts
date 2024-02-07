import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    color: {
      colorful: 'sm:header-mr-sm sm:header-ml-nano',
      white: 'header-mr-sm header-ml-xxs header-hidden sm:header-block',
    },
  },
})
export type HeaderPlayPlusVariants = VariantProps<typeof variants>

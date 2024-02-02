import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    color: {
      mobile: 'header-text-neutral-high-400 fill sm:header-mr-sm sm:header-ml-xxs',
      desktop: 'header-fill-highlight-400 lg:header-mr-sm lg:header-ml-xxs',
    },
  },
})
export type HeaderPlayPlusVariants = VariantProps<typeof variants>

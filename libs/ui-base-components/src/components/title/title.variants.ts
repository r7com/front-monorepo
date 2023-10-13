import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans',
  variants: {
    size: {
      large: 'text-xl font-semibold leading-10 sm:text-xxl',
      medium: 'text-md font-normal leading-8 sm:font-semibold ',
      small: 'font-semibold text-xxs leading-6',
    },
  },
})
export type TitleVariants = VariantProps<typeof variants>
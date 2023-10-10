import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans',
  variants: {
    size: {
      large: 'text-xl sm:text-xxl font-semibold',
      medium: 'text-md sm:font-semibold font-medium leading-8',
      small: 'font-semibold text-xxs leading-6',
    },
  },
})
export type TitleVariants = VariantProps<typeof variants>

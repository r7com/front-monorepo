import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans',
  variants: {
    size: {
      large: 'text-md font-bold leading-6 sm:text-xxl sm:font-semibold sm:leading-8',
      medium: 'text-xxs leading-6 font-bold',
      small: 'text-xxxs leading-5 sm:leading-6 sm:font-semibold',
    },
  },
})
export type SubtitleVariants = VariantProps<typeof variants>

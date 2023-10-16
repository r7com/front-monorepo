import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'font-open-sans',
  variants: {
    size: {
      large: 'text-md font-semibold leading-8',
      medium: 'text-xxs leading-6 font-bold',
      small: 'text-xxxs font-normal leading-5 sm:leading-4 sm:font-semibold',
    },
  },
})
export type SubtitleVariants = VariantProps<typeof variants>

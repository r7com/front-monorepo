import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  variants: {
    style: {
      titleLarge: 'font-open-sans text-xxl font-semibold',
      titleMedium: 'font-open-sans font-semibold text-md',
      titleSmall: 'font-open-sans font-semibold text-xxs',
      subtitleLarge: 'font-open-sans font-semibold text-md',
      subtitleMedium: 'font-open-sans font-semibold text-xxxs',
    },
  },
})
export type TitleVariants = VariantProps<typeof variants>

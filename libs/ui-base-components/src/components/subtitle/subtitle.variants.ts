import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'base-font-open-sans dark:base-text-neutral-high-400',
  variants: {
    size: {
      large: 'base-text-md base-font-semibold base-leading-8',
      medium: 'base-text-xxs base-leading-6 base-font-bold',
      small:
        'base-text-xxxs base-font-normal base-leading-5 sm:base-leading-4 sm:base-font-semibold',
    },
  },
})
export type SubtitleVariants = VariantProps<typeof variants>

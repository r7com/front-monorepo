import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'base-font-open-sans dark:base-text-neutral-high-400',
  variants: {
    size: {
      large: 'base-text-xl base-font-semibold base-leading-10 sm:base-text-xxl',
      medium: 'base-text-md base-font-normal base-leading-8 sm:base-font-semibold base-',
      small: 'base-font-semibold base-text-xxs base-leading-6',
    },
  },
})
export type TitleVariants = VariantProps<typeof variants>

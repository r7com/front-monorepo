import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'base-flex base-items-center base-gap-quark base-p-nano base-text-neutral-low-500 base-font-light base-w-auto',
  variants: {
    size: {
      large: 'base-text-xxs',
      medium: 'base-text-xxxs',
      small: 'base-text-little',
    },
  },
})

export type BulletVariants = VariantProps<typeof variants>

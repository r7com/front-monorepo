import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'flex items-center gap-quark p-nano text-neutral-low-500 font-light w-auto',
  variants: {
    size: {
      large: 'text-xxs',
      medium: 'text-xxxs',
      small: 'text-little',
    },
  },
})

export type AltBulletVariants = VariantProps<typeof variants>

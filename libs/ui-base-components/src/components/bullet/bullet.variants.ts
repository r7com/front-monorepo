import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    icon: 'base-mr-quark base-fill-brand-primary-500 base-inline',
    text: 'base-text-neutral-low-500 base-font-light base-w-auto',
  },
  variants: {
    size: {
      large: {
        text: 'base-text-xxs md:base-text-sm',
        icon: 'base-w-[12px] md:base-w-[14px] base-h-[12px] md:base-h-[14px]',
      },
      medium: {
        text: 'base-text-xxxs md:base-text-xxs',
        icon: 'base-w-[10px] md:base-w-[12px] base-h-[10px] md:base-h-[12px]',
      },
      small: {
        text: 'base-text-little md:base-text-xxxs',
        icon: 'base-w-nano md:base-w-[10px] base-h-nano md:base-h-[10px]',
      },
    },
  },
})

export type BulletVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '../../utils'

export const variants = createVariants({
  slots: {
    textSlot: 'base-text-neutral-low-500 base-font-light base-w-auto',
    iconSlot: 'base-mr-quark base-fill-brand-primary-500 base-inline',
  },
  variants: {
    size: {
      large: {
        textSlot: 'base-text-xxs md:base-text-sm',
        iconSlot: 'base-w-[12px] md:base-w-[14px] base-h-[12px] md:base-h-[14px]',
      },
      medium: {
        textSlot: 'base-text-xxxs md:base-text-xxs',
        iconSlot: 'base-w-[10px] md:base-w-[12px] base-h-[10px] md:base-h-[12px]',
      },
      small: {
        textSlot: 'base-text-little md:base-text-xxxs',
        iconSlot: 'base-w-nano md:base-w-[10px] base-h-nano md:base-h-[10px]',
      },
    },
  },
})

export type BulletVariants = VariantProps<typeof variants>

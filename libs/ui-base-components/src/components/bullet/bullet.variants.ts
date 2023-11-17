import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    icon: 'mr-quark fill-brand-primary-500 inline',
    text: 'text-neutral-low-500 font-light w-auto',
  },
  variants: {
    size: {
      large: {
        text: 'text-xxs md:text-sm',
        icon: 'w-[12px] md:w-[14px] h-[12px] md:h-[14px]',
      },
      medium: {
        text: 'text-xxxs md:text-xxs',
        icon: 'w-[10px] md:w-[12px] h-[10px] md:h-[12px]',
      },
      small: {
        text: 'text-little md:text-xxxs',
        icon: 'w-nano md:w-[10px] h-nano md:h-[10px]',
      },
    },
  },
})

export type BulletVariants = VariantProps<typeof variants>

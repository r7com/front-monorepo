import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'dark:base-text-neutral-high-400',
  variants: {
    fontSize: {
      little: 'base-text-little',
      xxxs: 'base-text-xxxs',
      xxs: 'base-text-xxs',
      xs: 'base-text-xs',
      sm: 'base-text-sm',
      md: 'base-text-md',
      lg: 'base-text-lg',
      xl: 'base-text-xl',
      xxl: 'base-text-xxl',
      xxxl: 'base-text-xxxl',
    },
    fontWeight: {
      light: 'base-font-light',
      normal: 'base-font-normal',
      semibold: 'base-font-semibold',
      bold: 'base-font-bold',
    },
    fontFamily: {
      openSans: 'base-font-open-sans',
      playfair: 'base-font-playfair-display',
      primary: 'base-font-primary',
    },
    color: {
      neutralLow: 'base-text-neutral-low-500',
      neutralHigh: 'base-text-neutral-high-400',
    },
    primaryTitle: {
      true: 'base-font-primary-light base-uppercase base-flex base-items-center base-leading-lg base-tracking-tight	!base-text-md !base-font-light after:base-ml-nano base-text-neutral-low-500  after:base-h-[1px] after:base-flex-1 after:base-content-[""] after:base-bg-neutral-low-500',
    },
  },
})

export type TypographyVariants = VariantProps<typeof variants>

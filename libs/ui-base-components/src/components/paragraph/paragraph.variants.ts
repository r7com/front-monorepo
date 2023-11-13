import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'dark:text-neutral-high-400',
  variants: {
    fontSize: {
      little: 'text-little',
      xxxs: 'text-xxxs',
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-xxl',
      xxxl: 'text-xxxl',
    },
    fontWeight: {
      light: 'font-light',
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    fontFamily: {
      openSans: 'font-open-sans',
      playfair: 'font-playfair-display',
    },
    color: {
      neutralLow: 'text-neutral-low-500',
      neutralHigh: 'text-neutral-high-400',
    },
  },
})

export type ParagraphVariants = VariantProps<typeof variants>
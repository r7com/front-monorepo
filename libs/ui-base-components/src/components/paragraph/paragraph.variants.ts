import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'dark:base-text-neutral-high-400',
  variants: {
    fontSize: {
      little: 'base-text-[calc(theme(fontSize.little)_*_var(--font-size,_1))]',
      xxxs: 'base-text-[calc(theme(fontSize.xxxs)_*_var(--font-size,_1))]',
      xxs: 'base-text-[calc(theme(fontSize.xxs)_*_var(--font-size,_1))]',
      xs: 'base-text-[calc(theme(fontSize.xs)_*_var(--font-size,_1))]',
      sm: 'base-text-[calc(theme(fontSize.sm)_*_var(--font-size,_1))]',
      md: 'base-text-[calc(theme(fontSize.md)_*_var(--font-size,_1))]',
      lg: 'base-text-[calc(theme(fontSize.lg)_*_var(--font-size,_1))]',
      xl: 'base-text-[calc(theme(fontSize.xl)_*_var(--font-size,_1))]',
      xxl: 'base-text-[calc(theme(fontSize.xxl)_*_var(--font-size,_1))]',
      xxxl: 'base-text-[calc(theme(fontSize.xxxl)_*_var(--font-size,_1))]',
    },
    fontWeight: {
      light: 'base-font-light',
      normal: 'base-font-normal',
      semibold: 'base-font-semibold',
      bold: 'base-font-bold',
    },
    fontFamily: {
      openSans: 'base-font-open-sans',
      secondary: 'base-font-secondary',
      primary: 'base-font-primary',
    },
    color: {
      neutralLow: 'base-text-neutral-low-500',
      neutralHigh: 'base-text-neutral-high-400',
    },
  },
})

export type ParagraphVariants = VariantProps<typeof variants>

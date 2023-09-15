import { createVariants, VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'transition-all rounded-sm border-hairline',
  variants: {
    color: {
      primary:
        'bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-400 fill-neutral-high-400 border-brand-primary-500 hover:border-brand-primary-600 active:border-brand-primary-600',
      secondary:
        'bg-highlight-500 hover:bg-highlight-600 active:bg-highlight-400 fill-neutral-high-400 border-highlight-500 hover:border-highlight-600 active:border-highlight-600',
      tertiary:
        'border-brand-primary-500 hover:border-brand-primary-600 active:border-light-low-500 fill-brand-primary-500 hover:fill-brand-primary-600 active:fill-light-low-500',
      original: 'border-transparent hover:grayscale-[.2] active:grayscale-[.4]',
    },
  },
})

export type SvgIconVariants = VariantProps<typeof variants>

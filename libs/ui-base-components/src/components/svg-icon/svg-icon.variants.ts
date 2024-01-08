import { createVariants, VariantProps } from '../../tailwind-variants'

export const variants = createVariants({
  base: 'base-transition-all base-rounded-sm base-border-hairline',
  variants: {
    color: {
      primary:
        'base-bg-brand-primary-500 hover:base-bg-brand-primary-600 active:base-bg-brand-primary-400 base-fill-neutral-high-400 base-border-brand-primary-500 hover:base-border-brand-primary-600 active:base-border-brand-primary-600',
      secondary:
        'base-bg-highlight-500 hover:base-bg-highlight-600 active:base-bg-highlight-400 base-fill-neutral-high-400 base-border-highlight-500 hover:base-border-highlight-600 active:base-border-highlight-600',
      tertiary:
        'base-border-brand-primary-500 hover:base-border-brand-primary-600 active:base-border-light-low-500 base-fill-brand-primary-500 hover:base-fill-brand-primary-600 active:base-fill-light-low-500',
      original: 'base-border-transparent hover:base-grayscale-[.2] active:base-grayscale-[.4]',
    },
  },
})

export type SvgIconVariants = VariantProps<typeof variants>

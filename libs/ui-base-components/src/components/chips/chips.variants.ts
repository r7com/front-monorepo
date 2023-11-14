import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'base-gap-nano base-px-xxxs base-rounded-pill base-font-semibold base-cursor-pointer base-flex base-items-center base-justify-center base-w-fit base-transition-colors',
  variants: {
    size: {
      large: 'base-h-sm base-text-xs [&>svg]:base-h-xxs [&>svg]:base-w-xxs',
      medium: 'base-h-xs base-text-xs [&>svg]:base-h-xxs [&>svg]:base-w-xxs',
      small: 'base-h-xxs base-text-xxxs [&>svg]:base-h-xxxs [&>svg]:base-w-xxxs',
    },
    color: {
      primary:
        'base-bg-brand-primary-500 base-text-neutral-high-500 hover:base-bg-brand-primary-600 hover:base-text-neutral-high-500 [&>svg]:base-fill-[#fff] [&>svg]:base-hover:fill-neutral-high-500 focus:base-border-light-low-500 focus:!base-border-thin active:base-bg-brand-primary-600 active:base-shadow-inner-level5',
      secondary:
        'base-bg-highlight-500 base-text-neutral-high-500 hover:base-bg-highlight-600 hover:base-text-neutral-high-500 [&>svg]:base-fill-[#fff] [&>svg]:base-hover:fill-neutral-high-500 focus:base-border-light-low-500 focus:!base-border-thin active:base-border-highlight-400 active:base-shadow-inner-level5',
      tertiary:
        'base-text-brand-primary-500 !base-border-hairline base-border-brand-primary-500 [&>svg]:base-fill-brand-primary-500 hover:base-border-brand-primary-600 hover:base-text-brand-primary-600 [&>svg]:base-hover:fill-brand-primary-600 base- focus:!base-shadow-brand-primary-500 focus:base-shadow-level5 active:!base-shadow-brand-primary-500/medium active:base-shadow-inner-level0',
    },
    disabled: {
      true: 'base-pointer-events-none',
    },
    selected: {
      true: '!base-border-hairline',
    },
  },
  compoundVariants: [
    {
      color: ['primary', 'secondary'],
      disabled: true,
      className:
        '!base-bg-dark-high-600 !base-text-dark-high-500 [&>svg]:!base-fill-dark-high-500 base-',
    },
    {
      color: ['tertiary'],
      disabled: true,
      className:
        '!base-text-dark-high-500 !base-border-hairline !base-border-dark-high-500 [&>svg]:!base-fill-dark-high-500',
    },
    {
      color: ['primary'],
      selected: true,
      className:
        '!bg-brand-primary-500 !base-text-brand-primary-600 !base-border-brand-primary-600 [&>svg]:!base-fill-brand-primary-600',
    },
    {
      color: ['secondary'],
      selected: true,
      className:
        '!bg-highlight-400 !base-text-highlight-600 !base-border-highlight-600 [&>svg]:!base-fill-highlight-600',
    },
    {
      color: ['tertiary'],
      selected: true,
      className:
        '!bg-brand-primary-500/medium !base-text-brand-primary-600 !base-border-brand-primary-600 [&>svg]:!base-fill-brand-primary-600',
    },
  ],
})

export type ChipsVariants = VariantProps<typeof variants>

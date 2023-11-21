import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'base-inline-flex base-items-center base-box-border base-cursor-pointer base-border-hairline base-rounded-md base-text-center base-leading-6 base-font-medium base-transition-all base-gap-nano dark:base-border-[1px] dark:base-border-solid dark:base-border-neutral-high-400 dark:base-bg-dark-low-600 dark:base-text-neutral-high-400 dark:base-fill-neutral-high-400',
  variants: {
    size: {
      large: 'base-text-xs base-py-[16px] base-px-nano',
      medium: 'base-text-xxs base-py-[10px] base-px-nano',
      small: 'base-text-xxxs base-py-[6px] base-px-nano',
    },
    color: {
      primary:
        'base-bg-brand-primary-500 hover:base-bg-brand-primary-600 active:base-bg-brand-primary-400 base-border-brand-primary-500 hover:base-border-brand-primary-600 active:base-border-brand-primary-600 focus:base-border-light-high-500 base-text-light-high-500 active:base-text-brand-primary-600',
      secondary:
        'base-bg-highlight-500 hover:base-bg-highlight-600 active:base-bg-highlight-400 base-border-highlight-500 hover:base-border-highlight-600 active:base-border-highlight-600 focus:base-border-light-high-500 base-text-light-high-500 active:base-text-highlight-600',
      tertiary:
        'base-bg-transparent base-border-brand-primary-500 hover:base-border-brand-primary-600 active:base-border-light-low-500 focus:base-shadow-level1 focus:base-shadow-brand-primary-500 base-text-brand-primary-500 hover:base-text-brand-primary-600 active:base-text-light-low-500',
      ghost:
        'base-bg-transparent base-border-none base-text-brand-primary-500 hover:base-text-brand-primary-600 active:base-text-light-low-500 focus:base-drop-shadow-glow active:base-drop-shadow-none',
    },
    disabled: {
      true: '!base-pointer-events-none !base-select-none',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: ['primary', 'secondary'],
      disabled: true,
      className: '!base-text-light-low-400 !base-border-dark-high-600 !base-bg-dark-high-600',
    },
    {
      color: ['tertiary'],
      disabled: true,
      className: '!base-text-dark-high-500 !base-border-dark-high-500',
    },
    {
      color: ['ghost'],
      disabled: true,
      className: '!base-text-dark-high-500',
    },
  ],
})

export type ButtonVariants = VariantProps<typeof variants>

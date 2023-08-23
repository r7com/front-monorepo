import { VariantProps, tv } from 'tailwind-variants'

export const variants = tv(
  {
    base: 'inline-flex items-center box-border cursor-pointer border-hairline rounded-md text-center leading-6 font-medium transition-all',
    variants: {
      size: {
        large: 'text-xs py-[16px] px-nano',
        medium: 'text-xxs py-[10px] px-nano',
        small: 'text-xxxs py-[6px] px-nano',
      },
      color: {
        primary:
          'bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-400 border-brand-primary-500 hover:border-brand-primary-600 active:border-brand-primary-600 focus:border-light-high-500 text-light-high-500 active:text-brand-primary-600',
        secondary:
          'bg-highlight-500 hover:bg-highlight-600 active:bg-highlight-400 border-highlight-500 hover:border-highlight-600 active:border-highlight-600 focus:border-light-high-500 text-light-high-500 active:text-highlight-600',
        tertiary:
          'bg-transparent border-brand-primary-500 hover:border-brand-primary-600 active:border-light-low-500 focus:shadow-level1 focus:shadow-brand-primary-500 text-brand-primary-500 hover:text-brand-primary-600 active:text-light-low-500',
        ghost:
          'bg-transparent border-none text-brand-primary-500 hover:text-brand-primary-600 active:text-light-low-500',
      },
      disabled: {
        true: '!pointer-events-none !select-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        color: ['primary', 'secondary'],
        disabled: true,
        className: '!text-light-low-400 !border-dark-high-600 !bg-dark-high-600',
      },
      {
        color: ['tertiary'],
        disabled: true,
        className: '!text-dark-high-500 !border-dark-high-500',
      },
      {
        color: ['ghost'],
        disabled: true,
        className: '!text-dark-high-500',
      },
    ],
  },
  {
    twMerge: false,
  },
)

export type ButtonVariants = VariantProps<typeof variants>

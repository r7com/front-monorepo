import { createVariants, VariantProps } from '@r7-jarvics/utils'

export const variants = createVariants({
  base: 'gap-nano px-xxxs rounded-pill font-semibold cursor-pointer flex items-center justify-center w-fit transition-colors',
  variants: {
    size: {
      large: 'h-sm text-xs [&>svg]:h-xxs [&>svg]:w-xxs',
      medium: 'h-xs text-xs [&>svg]:h-xxs [&>svg]:w-xxs',
      small: 'h-xxs text-xxxs [&>svg]:h-xxxs [&>svg]:w-xxxs',
    },
    color: {
      primary:
        'bg-brand-primary-500 text-neutral-high-500 hover:bg-brand-primary-600 hover:text-neutral-high-500 [&>svg]:fill-[#fff] [&>svg]:hover:fill-neutral-high-500 focus:border-light-low-500 focus:!border-thin active:bg-brand-primary-600 active:shadow-inner-level5',
      secondary:
        'bg-highlight-500 text-neutral-high-500 hover:bg-highlight-600 hover:text-neutral-high-500 [&>svg]:fill-[#fff] [&>svg]:hover:fill-neutral-high-500 focus:border-light-low-500 focus:!border-thin active:border-highlight-400 active:shadow-inner-level5',
      tertiary:
        'text-brand-primary-500 !border-hairline border-brand-primary-500 [&>svg]:fill-brand-primary-500 hover:border-brand-primary-600 hover:text-brand-primary-600 [&>svg]:hover:fill-brand-primary-600  focus:!shadow-brand-primary-500 focus:shadow-level5 active:!shadow-brand-primary-500/medium active:shadow-inner-level0',
    },
    disabled: {
      true: 'pointer-events-none',
    },
    selected: {
      true: '!border-hairline',
    },
  },
  compoundVariants: [
    {
      color: ['primary', 'secondary'],
      disabled: true,
      className: '!bg-dark-high-600 !text-dark-high-500 [&>svg]:!fill-dark-high-500 ',
    },
    {
      color: ['tertiary'],
      disabled: true,
      className:
        '!text-dark-high-500 !border-hairline !border-dark-high-500 [&>svg]:!fill-dark-high-500',
    },
    {
      color: ['primary'],
      selected: true,
      className:
        '!bg-brand-primary-500 !text-brand-primary-600 !border-brand-primary-600 [&>svg]:!fill-brand-primary-600',
    },
    {
      color: ['secondary'],
      selected: true,
      className:
        '!bg-highlight-400 !text-highlight-600 !border-highlight-600 [&>svg]:!fill-highlight-600',
    },
    {
      color: ['tertiary'],
      selected: true,
      className:
        '!bg-brand-primary-500/medium !text-brand-primary-600 !border-brand-primary-600 [&>svg]:!fill-brand-primary-600',
    },
  ],
})

export type ChipsVariants = VariantProps<typeof variants>

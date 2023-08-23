import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    toggleVariant:
      'flex items-center flex-shrink-0 p-1 rounded-pill p-quark ease-in-out after:rounded-circular after:duration-300 transition-colors',
    boxVariant: 'absolute flex items-center',
    checkVariant: 'min-w-max min-h-max m-nano',
    errorVariant: 'absolute min-w-max min-h-max m-nano',
  },
  variants: {
    disabled: {
      true: {
        toggleVariant: 'bg-dark-high-600 peer-checked:bg-dark-high-600 after:bg-dark-high-500',
        checkVariant: 'fill-dark-high-500',
        errorVariant: 'fill-dark-high-500',
      },
      false: {
        toggleVariant:
          'bg-dark-high-500 peer-checked:bg-brand-primary-500  after:bg-light-high-500 group-hover:bg-dark-high-600 group-hover:peer-checked:bg-brand-primary-600 group-active:shadow-neutral-low-600 group-active:shadow-inner group-active:peer-checked:shadow-neutral-low-600 group-active:peer-checked:shadow-inner shadow-drop peer-focus:outline peer-focus:outline-1 peer-focus:outline-light-high-500 peer-focus:shadow-neutral-low-400 peer-checked:peer-focus:shadow-brand-primary-500',
        checkVariant: 'fill-light-high-500',
        errorVariant: 'fill-light-high-500',
      },
    },
    size: {
      large: {
        toggleVariant: 'w-xxxl h-sm after:w-xs after:h-xs peer-checked:after:translate-x-sm',
        boxVariant: 'w-xxxl h-sm',
        checkVariant: 'w-xxs h-xxs',
        errorVariant: 'w-xxxs h-xxxs right-quark',
      },
      medium: {
        toggleVariant: 'w-xl h-xs after:w-xxs after:h-xxs peer-checked:after:translate-x-xs',
        boxVariant: 'w-xl h-xs',
        checkVariant: 'w-xxxs h-xxxs',
        errorVariant: 'w-xxxs h-xxxs right-0',
      },
      small: {
        toggleVariant: 'w-md h-xxs after:w-xxxs after:h-xxxs peer-checked:after:translate-x-xxs',
        boxVariant: 'w-md h-xxs',
        checkVariant: 'w-nano w h-nano',
        errorVariant: 'w-nano h-nano right-0',
      },
    },
  },
})

export type ToggleVariants = VariantProps<typeof variants>

import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    toggle:
      'flex items-center flex-shrink-0 p-1 rounded-pill p-quark ease-in-out after:rounded-circular after:duration-300 transition-colors',
    iconsContainer: 'absolute flex items-center',
    iconChecked: 'min-w-max min-h-max m-nano',
    iconUnchecked: 'absolute min-w-max min-h-max m-nano',
  },
  variants: {
    disabled: {
      true: {
        toggle: 'bg-dark-high-600 peer-checked:bg-dark-high-600 after:bg-dark-high-500',
        iconChecked: 'fill-dark-high-500',
        iconUnchecked: 'fill-dark-high-500',
      },
      false: {
        toggle:
          'bg-dark-high-500 peer-checked:bg-brand-primary-500  after:bg-light-high-500 group-hover:bg-dark-high-600 group-hover:peer-checked:bg-brand-primary-600 group-active:shadow-neutral-low-600 group-active:shadow-inner group-active:peer-checked:shadow-neutral-low-600 group-active:peer-checked:shadow-inner shadow-drop peer-focus:outline peer-focus:outline-1 peer-focus:outline-light-high-500 peer-focus:shadow-neutral-low-400 peer-checked:peer-focus:shadow-brand-primary-500',
        iconChecked: 'fill-light-high-500',
        iconUnchecked: 'fill-light-high-500',
      },
    },
    size: {
      large: {
        toggle: 'w-xxxl h-sm after:w-xs after:h-xs peer-checked:after:translate-x-sm',
        iconsContainer: 'w-xxxl h-sm',
        iconChecked: 'w-xxs h-xxs',
        iconUnchecked: 'w-xxxs h-xxxs right-quark',
      },
      medium: {
        toggle: 'w-xl h-xs after:w-xxs after:h-xxs peer-checked:after:translate-x-xs',
        iconsContainer: 'w-xl h-xs',
        iconChecked: 'w-xxxs h-xxxs',
        iconUnchecked: 'w-xxxs h-xxxs right-0',
      },
      small: {
        toggle: 'w-md h-xxs after:w-xxxs after:h-xxxs peer-checked:after:translate-x-xxs',
        iconsContainer: 'w-md h-xxs',
        iconChecked: 'w-nano w h-nano',
        iconUnchecked: 'w-nano h-nano right-0',
      },
    },
  },
})

export type ToggleVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '../../utils'

export const variants = createVariants({
  slots: {
    toggle:
      'base-flex base-items-center base-flex-shrink-0 base-rounded-pill base-p-quark base-ease-in-out after:base-rounded-circular after:base-duration-300 base-transition-colors',
    iconsContainer: 'base-absolute base-flex base-items-center',
    iconChecked: 'base-min-w-max base-min-h-max base-m-nano',
    iconUnchecked: 'base-absolute base-min-w-max base-min-h-max base-m-nano',
  },
  variants: {
    disabled: {
      true: {
        toggle:
          'base-bg-dark-high-600 peer-checked:base-bg-dark-high-600 after:base-bg-dark-high-500',
        iconChecked: 'base-fill-dark-high-500',
        iconUnchecked: 'base-fill-dark-high-500',
      },
      false: {
        toggle:
          'base-bg-dark-high-500 peer-checked:base-bg-brand-primary-500 after:base-bg-light-high-500 group-hover:base-bg-dark-high-600 group-hover:base-peer-checked:bg-brand-primary-600 group-active:base-shadow-neutral-low-600 group-active:base-shadow-inner group-active:base-peer-checked:shadow-neutral-low-600 group-active:base-peer-checked:shadow-inner base-shadow-drop peer-focus:base-outline peer-focus:base-outline-1 peer-focus:base-outline-light-high-500 peer-focus:base-shadow-neutral-low-400 peer-checked:base-peer-focus:shadow-brand-primary-500',
        iconChecked: 'base-fill-light-high-500',
        iconUnchecked: 'base-fill-light-high-500',
      },
    },
    size: {
      large: {
        toggle:
          'base-w-xxxl base-h-sm after:base-w-xs after:base-h-xs peer-checked:after:base-translate-x-sm',
        iconsContainer: 'base-w-xxxl base-h-sm',
        iconChecked: 'base-w-xxs base-h-xxs',
        iconUnchecked: 'base-w-xxxs base-h-xxxs base-right-quark',
      },
      medium: {
        toggle:
          'base-w-xl base-h-xs after:base-w-xxs after:base-h-xxs peer-checked:after:base-translate-x-xs',
        iconsContainer: 'base-w-xl base-h-xs',
        iconChecked: 'base-w-xxxs base-h-xxxs',
        iconUnchecked: 'base-w-xxxs base-h-xxxs base-right-0',
      },
      small: {
        toggle:
          'base-w-md base-h-xxs after:base-w-xxxs after:base-h-xxxs peer-checked:after:base-translate-x-xxs',
        iconsContainer: 'base-w-md base-h-xxs',
        iconChecked: 'base-w-nano base-w base-h-nano',
        iconUnchecked: 'base-w-nano base-h-nano base-right-0',
      },
    },
  },
})

export type ToggleVariants = VariantProps<typeof variants>

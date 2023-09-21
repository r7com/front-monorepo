import { VariantProps, createVariants } from '@r7-jarvics/tools'

export const variants = createVariants({
  slots: {
    button:
      'flex text-light-low-400 p-nano gap-nano items-center border-b-thin border-transparent hover:text-brand-primary-600 group transition-colors active:border-b-brand-primary-500 active:text-light-low-400 active:outline-none active:drop-shadow-none focus-visible:drop-shadow-glow focus-visible:outline-none focus-visible:text-brand-primary-500 focus-visible:border-b-brand-primary-500 aria-selected:text-brand-primary-500 aria-selected:border-b-brand-primary-500',
    icon: 'fill-light-low-400 group-active:fill-light-low-400  group-hover:fill-brand-primary-600 group-focus-visible:fill-brand-primary-500 group-aria-selected:fill-brand-primary-500 pointer-events-none',
  },
  variants: {
    size: {
      small: {
        button: 'text-xxxs',
        icon: '',
      },
      medium: {
        button: 'text-xxs',
        icon: '',
      },
      large: {
        button: 'text-xs',
        icon: '',
      },
    },
  },
})

export type TabVariants = VariantProps<typeof variants>

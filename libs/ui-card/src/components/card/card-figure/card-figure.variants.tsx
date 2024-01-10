import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'card-rounded-md card-overflow-hidden card-relative',
  variants: {
    format: {
      square: 'card-aspect-square',
      landscape: 'card-aspect-landscape',
      portrait: 'card-aspect-portrait',
      custom: '',
    },
    shadow: {
      true: 'card-from-transparent card-to-neutral-low-600 after:card-absolute after:card-inset-0 after:card-pointer-events-none after:card-bg-gradient-to-b',
      false: '',
    },
    shadowFrom: {
      '0%': 'card-from-0%',
      '50%': 'card-from-50%',
    },
    shadowTo: {
      '50%': 'card-to-50%',
      '100%': 'card-to-100%',
    },
  },
})

export type CardFigureVariants = VariantProps<typeof variants>

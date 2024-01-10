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
      true: 'after:card-absolute after:card-inset-0 after:card-pointer-events-none after:card-bg-gradient-to-b card-from-transparent card-from-50% card-to-neutral-low-600',
      false: '',
    },
  },
})

export type CardFigureVariants = VariantProps<typeof variants>

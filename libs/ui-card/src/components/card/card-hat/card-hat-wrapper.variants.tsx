import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'card-flex card-items-center card-mb-nano',
  variants: {
    type: {
      warning:
        'card-bg-feedback-warning-400 card-rounded-md card-overflow-hidden card-p-nano card-inline-flex',
    },
  },
})

export type CardHatWrapperVariants = VariantProps<typeof variants>

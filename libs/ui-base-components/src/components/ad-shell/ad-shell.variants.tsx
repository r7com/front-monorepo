import { VariantProps, createVariants } from '../../utils'

export const variants = createVariants({
  slots: {
    adContainer: 'base-flex base-justify-center base-bg-neutral-high-600',
    text: 'base-block base-text-xxxs base-uppercase base-text-neutral-low-500 base-font-open-sans',
  },
  variants: {
    layout: {
      tag: {
        text: 'base-mb-nano',
      },
      background: {
        text: 'base-p-nano base-h-sm base-text-center',
      },
      none: {},
      lines: {},
    },
  },
})

export type AdShellVariants = VariantProps<typeof variants>

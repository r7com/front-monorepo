import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'tv-absolute tv-left-0 tv-bg-feedback-warning-400 tv-uppercase tv-text-neutral-high-400 tv-py-quark tv-pl-sm tv-pr-nano tv-font-bold tv-text-xxxs',
  variants: {
    position: {
      top: '-tv-top-xxxs',
      float: 'tv-top-0 md:tv-top-xs',
    },
  },
})

export type TvGuideLiveTagVariants = VariantProps<typeof variants>

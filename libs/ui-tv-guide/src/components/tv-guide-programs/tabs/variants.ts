import { createVariants } from '@r7/ui-base-components'

export const dayVariants = createVariants({
  slots: {
    buttonSlot:
      'tv-w-xxxl md:tv-w-full tv-flex tv-font-bold tv-justify-center tv-uppercase tv-text-xxxs tv-text-neutral-low-500',
    itemSlot: 'tv-flex tv-flex-1 tv-bg-neutral-high-500',
  },
  variants: {
    currentSelected: {
      true: {
        buttonSlot: '!tv-text-editorial-color',
        itemSlot: '!tv-bg-neutral-high-400',
      },
      false: {},
    },
    currentDay: {
      true: {
        itemSlot: 'tv-bg-neutral-high-600',
      },
      false: {},
    },
  },
})

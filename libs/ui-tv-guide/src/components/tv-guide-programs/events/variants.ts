import { createVariants } from '@r7/ui-base-components'

export const listVariants = createVariants({
  base: '',
  variants: {
    activeTab: {
      true: '',
      false: 'tv-hidden',
    },
  },
})

export const eventVariants = createVariants({
  slots: {
    eventSlot:
      'tv-border-b-hairline tv-border-b-neutral-high-600 tv-w-full tv-relative tv-cursor-pointer tv-py-xs',
    iconSlot: 'tv-absolute tv-top-nano tv-right-0 tv-fill-dark-high-600 group-open:tv-rotate-180',
    contentSlot: 'tv-list-none tv-flex tv-gap-xxxs tv-flex-wrap md:tv-flex-nowrap tv-items-center',
  },
})

export const descriptionVariants = createVariants({
  base: 'tv-w-full tv-pb-xxs tv-pt-xxxs md:tv-pl-nano tv-cursor-auto tv-flex tv-flex-col tv-gap-xxxs',
})

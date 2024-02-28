import { createVariants } from '@r7/ui-base-components'

export const wrapperVariants = createVariants({
  base: 'tv-flex tv-flex-col tv-gap-nano lg:tv-grid tv-grid-cols-24 tv-w-full',
})

export const liveVariants = createVariants({
  base: 'md:tv-col-span-12 tv-relative',
})

export const nextVariants = createVariants({
  slots: {
    wrapperSlot: 'md:tv-col-span-12 tv-flex tv-flex-col tv-gap-nano',
    eventSlot:
      'tv-h-1/2 tv-flex tv-items-center tv-bg-neutral-high-500 tv-rounded-md tv-py-xxs tv-pl-xxxs',
  },
})

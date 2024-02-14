import { createVariants } from '@r7/ui-base-components'

export const selectVariants = createVariants({
  slots: {
    wrapperSlot: 'tv-flex md:tv-justify-end tv-justify-center',
    selectSlot:
      'tv-appearance-none tv-bg-neutral-high-400 tv-border-thin tv-border-neutral-high-600 tv-px-xxxs tv-py-nano tv-w-full md:tv-w-[200px] tv-rounded-md',
  },
})

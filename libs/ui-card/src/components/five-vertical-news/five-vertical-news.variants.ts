import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    wrapperSlot:
      'card-flex card-flex-col card-bg-neutral-high-500 card-h-full card-gap-nano card-p-xxxs',
    newsWrapperSlot:
      'card-flex card-flex-row lg:card-flex-col card-overflow-x-auto lg:card-overflow-x-hidden card-gap-xxxs',
  },
})

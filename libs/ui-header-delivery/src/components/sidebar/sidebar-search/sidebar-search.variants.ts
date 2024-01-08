import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    wrapperSlot: 'header-mb-xxs header-text-neutral-low-500 sm:header-hidden',
    formSlot: 'header-flex header-relative',
    inputSlot:
      'header-pl-xs header-rounded-md header-w-full header-h-sm header-border-[1px] header-border-[#d7d7d7] header-bg-[#f8f8f8] header-focus-visible:outline-offset-0',
    submitSlot: 'header-absolute header-top-0 header-bottom-0 header-left-[10px]',
  },
})

import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    wrapperSlot: 'mb-xxs text-neutral-low-500 sm:hidden',
    formSlot: 'flex relative',
    inputSlot:
      'pl-xs rounded-md w-full h-sm border-[1px] border-[#d7d7d7] bg-[#f8f8f8] focus-visible:outline-offset-0',
    submitSlot: 'absolute top-0 bottom-0 left-[10px]',
  },
})

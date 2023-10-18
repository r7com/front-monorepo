import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    buttonSlot:
      'flex items-center h-full gap-[1px] text-neutral-high-400 absolute left-xxxs sm:static',
    iconSlot: 'flex flex-col w-xxxs h-xxxs mr-nano justify-around',
    firstLineSlot: 'bg-neutral-high-400 w-full h-[2px] rounded-sm transition-all',
    secondLineSlot: 'bg-neutral-high-400 w-full h-[2px] rounded-sm transition-all',
    thirdLineSlot: 'bg-neutral-high-400 w-full h-[2px] rounded-sm transition-all',
  },
  variants: {
    isSidebarOpen: {
      true: {
        iconSlot: 'justify-center relative',
        firstLineSlot: 'absolute rotate-45',
        secondLineSlot: 'bg-transparent',
        thirdLineSlot: 'absolute -rotate-45',
      },
    },
  },
})

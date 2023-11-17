import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    buttonSlot:
      'header-flex header-items-center header-h-full header-gap-[1px] header-text-neutral-high-400 header-absolute header-left-xxxs sm:header-static',
    iconSlot:
      'header-flex header-flex-col header-w-xxxs header-h-xxxs header-mr-nano header-justify-around',
    firstLineSlot:
      'header-bg-neutral-high-400 header-w-full header-h-[2px] header-rounded-sm header-transition-all',
    secondLineSlot:
      'header-bg-neutral-high-400 header-w-full header-h-[2px] header-rounded-sm header-transition-all',
    thirdLineSlot:
      'header-bg-neutral-high-400 header-w-full header-h-[2px] header-rounded-sm header-transition-all',
  },
  variants: {
    isSidebarOpen: {
      true: {
        iconSlot: 'header-justify-center header-relative',
        firstLineSlot: 'header-absolute header-rotate-45',
        secondLineSlot: 'header-bg-transparent',
        thirdLineSlot: 'header-absolute -header-rotate-45',
      },
    },
  },
})

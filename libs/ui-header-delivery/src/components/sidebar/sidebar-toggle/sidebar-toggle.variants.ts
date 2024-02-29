import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    buttonSlot:
      'header-flex header-items-center header-h-full header-gap-[1px] header-text-neutral-high-400 header-absolute header-left-xxxs lg:header-static header-text-xxxs',
    iconSlot:
      'header-flex header-flex-col header-w-xxxs header-h-xxxs header-mr-nano header-justify-around',
    firstLineSlot:
      'header-bg-neutral-high-400 header-w-full header-h-[2px] header-rounded-sm header-transition-all',
    secondLineSlot:
      'header-bg-neutral-high-400 header-w-full header-h-[2px] header-rounded-sm header-transition-all',
    thirdLineSlot:
      'header-bg-neutral-high-400 header-w-full header-h-[2px] header-rounded-sm header-transition-all',
    verticalLineSlot:
      'header-bg-neutral-high-400 header-w-[1px] header-h-[25px] header-ml-xxxs header-mr-xxxs sm:header-block lg:header-hidden',
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

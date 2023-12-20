import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'header-h-lg header-fixed header-w-full header-hidden header-px-nano lg:header-flex header-items-center header-justify-start header-border-b-hairline header-border-b-neutral-high-600 header-bg-neutral-high-400 header-transition-all header-ease-in-out header-duration-300',
  variants: {
    fadeIn: {
      true: 'header-visible',
      false: 'header-invisible header-opacity-transparent',
    },
  },
})

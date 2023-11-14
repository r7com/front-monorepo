import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'header-w-full header-inset-0 header-fixed header-transition-all header-duration-200 header-p-xxs header-bg-neutral-high-400 header-lowercase header-gap-xxs header-flex header-flex-col header-overflow-auto',
  variants: {
    isSubmenuOpen: {
      true: '-translate-x-0 visible',
      false: 'translate-x-full invisible opacity-transparent',
    },
  },
})

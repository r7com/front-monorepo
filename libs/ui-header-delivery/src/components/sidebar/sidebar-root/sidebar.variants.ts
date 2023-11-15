import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    sidebarSlot:
      'header-w-[280px] header-fixed header-inset-0 header-top-lg header-flex header-z-20 header-overflow-x-hidden header-transition-all header-duration-200',
    sidebarListSlot:
      'header-bg-neutral-high-400 header-w-full header-p-xxs header-overflow-x-hidden',
    backdropButtonSlot:
      'header-fixed header-w-full header-h-screen header-inset-0 header-transition-all header-top-lg',
  },
  variants: {
    isSidebarOpen: {
      true: {
        sidebarSlot: 'header-translate-x-0 header-visible',
        backdropButtonSlot: 'header-backdrop-brightness-50 header-visible',
      },
      false: {
        sidebarSlot: '-header-translate-x-full header-invisible',
        backdropButtonSlot: 'header-invisible',
      },
    },
  },
})

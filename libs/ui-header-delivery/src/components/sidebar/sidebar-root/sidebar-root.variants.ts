import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    sidebarMenu:
      'w-[280px] bg-neutral-high-400 z-20 transition-all duration-200 absolute inset-0 overflow-x-hidden',
    sidebarContaner: 'w-full h-screen absolute overflow-hidden top-lg flex transition-all',
  },
  variants: {
    isSidebarOpen: {
      true: {
        sidebarMenu: 'translate-x-0',
        sidebarContaner: 'visible backdrop-brightness-75',
      },
      false: {
        sidebarMenu: '-translate-x-full',
        sidebarContaner: 'invisible',
      },
    },
  },
})

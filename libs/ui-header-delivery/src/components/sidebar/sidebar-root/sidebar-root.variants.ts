import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    sidebarSlot: 'w-[280px] fixed inset-0 top-lg flex z-20 transition-all duration-200',
    sidebarListSlot: 'bg-neutral-high-400 w-full p-xxs overflow-x-hidden',
    backdropButtonSlot: 'fixed w-full h-screen inset-0 transition-all top-lg',
  },
  variants: {
    isSidebarOpen: {
      true: {
        sidebarSlot: 'translate-x-0 visible',
        backdropButtonSlot: 'backdrop-brightness-50 visible',
      },
      false: {
        sidebarSlot: '-translate-x-full invisible',
        backdropButtonSlot: 'invisible',
      },
    },
  },
})

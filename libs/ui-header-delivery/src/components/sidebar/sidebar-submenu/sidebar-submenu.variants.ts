import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'w-full inset-0 fixed transition-all duration-200 p-xxs bg-neutral-high-400 lowercase gap-xxs flex flex-col overflow-auto',
  variants: {
    isSubmenuOpen: {
      true: '-translate-x-0 visible',
      false: 'translate-x-full invisible opacity-transparent',
    },
  },
})

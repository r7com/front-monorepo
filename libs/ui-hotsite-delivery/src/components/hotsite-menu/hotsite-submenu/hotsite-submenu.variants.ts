import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'fixed sm:absolute left-0 right-0 top-lg w-full sm:w-[210px] bg-neutral-high-400 shadow-drop z-10',
  variants: {
    isOpen: {
      true: 'block',
      false: 'hidden',
    },
  },
})

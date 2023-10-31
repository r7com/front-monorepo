import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'absolute top-lg w-[210px] bg-neutral-high-400 shadow-drop z-10',
  variants: {
    isOpen: {
      true: 'block',
      false: 'hidden',
    },
  },
})

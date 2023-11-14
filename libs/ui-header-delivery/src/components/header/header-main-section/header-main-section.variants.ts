import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'flex justify-around items-center px-nano h-lg w-full bg-editorial-color relative',
  variants: {
    fixed: {
      true: '!fixed z-10 top-0',
    },
  },
})

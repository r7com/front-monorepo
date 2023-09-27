import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'flex justify-around items-center px-nano h-auto w-full bg-editorial-color',
  variants: {
    fixed: {
      true: 'fixed',
    },
  },
})

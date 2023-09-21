import { createVariants } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'h-auto sm:h-[50px] w-full bg-editorial-color',
  variants: {
    fixed: {
      true: 'fixed',
    },
  },
})

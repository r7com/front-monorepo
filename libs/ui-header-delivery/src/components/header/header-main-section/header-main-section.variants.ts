import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'header-flex header-justify-around header-items-center header-px-nano header-h-lg header-w-full header-bg-editorial-color header-relative',
  variants: {
    fixed: {
      true: '!fixed z-10 top-0',
    },
  },
})

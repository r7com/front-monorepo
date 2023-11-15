import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'header-flex header-justify-around header-items-center header-px-nano header-h-lg header-w-full header-bg-editorial-color header-relative',
  variants: {
    fixed: {
      true: '!header-fixed header-z-10 header-top-0',
    },
  },
})

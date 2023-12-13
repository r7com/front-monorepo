import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'header-flex header-flex-col header-w-full header-fixed -header-top-giant header-transition-all header-duration-300 lg:header-transition-none lg:header-top-0',
  variants: {
    fixed: {
      true: 'header-z-10 !header-top-0',
    },
  },
})

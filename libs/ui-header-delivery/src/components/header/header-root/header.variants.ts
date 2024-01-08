import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'header-flex header-flex-col header-w-full header-sticky -header-top-giant header-transition-all header-duration-300',
  variants: {
    fixed: {
      true: 'header-z-10 !header-top-0',
    },
  },
})

import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'w-full flex hover:underline',
  variants: {
    isActive: {
      true: '',
      false: '',
    },
  },
})

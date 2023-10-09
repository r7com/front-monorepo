import { createVariants } from '@r7/tools'

export const variants = createVariants({
  base: "h-full flex items-center text-xxxs font-normal leading-5 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']",
  variants: {
    isActive: {
      true: '',
      false: '',
    },
  },
})

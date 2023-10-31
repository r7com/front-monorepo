import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'flex justify-center items-center w-sm sm:w-xs h-sm sm:h-xs border-hairline',
  variants: {
    shape: {
      circle: 'bg-neutral-low-400 rounded-circular',
      square: 'border-dark-high-500 rounded-md',
    },
  },
})

export type SocialItemVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    increase:
      'md:mr-nano mr-xxxs md:w-xs md:h-xs md:text-sm rounded-md w-sm h-sm text-md bg-neutral-high-600/medium text-agerating-18anos-500 font-semibold flex items-center justify-center border-none hover:bg-[#f1f1f1]',
    decrease:
      'md:w-xs md:h-xs md:text-sm rounded-md w-sm h-sm text-md bg-neutral-high-600/medium text-agerating-18anos-500 font-semibold flex items-center justify-center border-none hover:bg-[#f1f1f1]',
  },
})

export type FontSizeChangerVariants = VariantProps<typeof variants>

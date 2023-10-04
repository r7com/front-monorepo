import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'absolute flex items-center right-0 top-0 px-nano py-quark bg-neutral-high-400 font-open-sans rounded-bl-md',
  variants: {
    type: {
      live: 'before:w-nano before:h-nano before:inline-block before:bg-feedback-warning-500 before:rounded-circular before:mr-nano after:font-open-sans after:text-little after:font-semibold after:text-light-low-600 after:content-["AO_VIVO"]',
      blog: '',
      studio: '',
      'sponsored-by': 'text-little text-neutral-low-500',
      voting: '',
      podcast: '',
      aclr: '',
    },
  },
})

export type CardLabelVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    iconStyle: '',
    labelStyle:
      'absolute flex items-center right-0 top-0 px-nano py-quark bg-neutral-high-400 font-open-sans rounded-bl-md',
  },
  variants: {
    type: {
      live: {
        labelStyle:
          'before:w-nano before:h-nano before:inline-block before:bg-feedback-warning-500 before:rounded-circular before:mr-nano after:font-open-sans after:text-little after:font-normal after:text-light-low-600 after:content-["AO_VIVO"]',
      },
      blog: {
        iconStyle: 'mr-quark',
        labelStyle:
          'after:font-open-sans after:text-little after:font-normal after:text-light-low-600 after:content-["BLOG"]',
      },
      studio: {
        iconStyle: 'w-[60px]',
      },
      'sponsored-by': {
        labelStyle: 'text-little text-neutral-low-500',
      },
      voting: {
        iconStyle: 'mr-quark',
        labelStyle:
          'after:font-open-sans after:text-little after:font-normal after:text-light-low-600 after:content-["VOTAÇÃO"]',
      },
      podcast: {
        iconStyle: 'mr-quark',
        labelStyle:
          'after:font-open-sans after:text-little after:font-normal after:text-light-low-600 after:content-["PODCAST"]',
      },
      aclr: {
        iconStyle: 'w-[40px]',
      },
    },
  },
})

export type CardLabelVariants = VariantProps<typeof variants>

import { VariantProps, createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    iconStyle: '',
    labelStyle:
      'card-absolute card-flex card-items-center card-right-0 card-top-0 card-px-nano card-py-quark card-bg-neutral-high-400 card-font-open-sans card-rounded-bl-md',
  },
  variants: {
    type: {
      live: {
        labelStyle:
          'before:card-w-nano before:card-h-nano before:card-inline-block before:card-bg-feedback-warning-500 before:card-rounded-circular before:card-mr-nano after:card-font-open-sans after:card-text-little after:card-font-normal after:card-text-light-low-600 after:card-content-["AO_VIVO"]',
      },
      blog: {
        iconStyle: 'card-mr-quark',
        labelStyle:
          'after:card-font-open-sans after:card-text-little after:card-font-normal after:card-text-light-low-600 after:card-content-["BLOG"]',
      },
      studio: {
        iconStyle: 'card-w-[60px]',
      },
      'sponsored-by': {
        labelStyle: 'card-text-little card-text-neutral-low-500',
      },
      voting: {
        iconStyle: 'card-mr-quark',
        labelStyle:
          'after:card-font-open-sans after:card-text-little after:card-font-normal after:card-text-light-low-600 after:card-content-["VOTAÇÃO"]',
      },
      podcast: {
        iconStyle: 'card-mr-quark',
        labelStyle:
          'after:card-font-open-sans after:card-text-little after:card-font-normal after:card-text-light-low-600 after:card-content-["PODCAST"]',
      },
      aclr: {
        iconStyle: 'card-w-[40px]',
      },
    },
  },
})

export type CardLabelVariants = VariantProps<typeof variants>

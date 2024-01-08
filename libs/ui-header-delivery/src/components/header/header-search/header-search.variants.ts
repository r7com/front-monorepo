import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    wrapperSlot:
      'header-fixed header-w-full header-top-lg header-transition-all header-duration-200 header-h-xxxl header-overflow-hidden header-bg-gradient-to-b header-from-neutral-high-500 header-from-90% header-to-dark-high-500/semi-opaque header-hidden sm:header-flex header-items-center header-justify-center',
    formSlot: 'header-w-11/12 header-mx-auto header-my-0 header-flex',
    inputSlot:
      'header-w-10/12 header-px-xxxs header-py-quark header-rounded-s-md header-border-hairline header-border-dark-high-500 header-text-xxxs header-text-neutral-high-600 header-outline-0',
    submitSlot:
      'header-w-2/12 header-bg-neutral-high-600 header-text-little header-uppercase header-text-neutral-high-400 header-font-bold header-rounded-e-md',
  },
  variants: {
    isSearchActive: {
      true: {
        wrapperSlot: 'header-translate-y-0 header-visible header-z-20',
      },
      false: {
        wrapperSlot: '-header-translate-y-full header-invisible header-opacity-transparent',
      },
    },
  },
})

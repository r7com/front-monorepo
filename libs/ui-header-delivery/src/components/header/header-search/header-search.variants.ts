import { createVariants } from '@r7/tools'

export const variants = createVariants({
  slots: {
    wrapperSlot:
      'fixed w-full top-lg transition-all duration-200 h-xxxl overflow-hidden bg-gradient-to-b from-neutral-high-500 from-90% to-dark-high-500/semi-opaque hidden sm:flex items-center justify-center',
    formSlot: 'w-11/12 mx-auto my-0 flex',
    inputSlot:
      'w-10/12 px-xxxs py-quark rounded-s-md border-hairline border-dark-high-500 text-xxxs text-neutral-high-600 outline-0',
    submitSlot:
      'w-2/12 bg-neutral-high-600 text-little uppercase text-neutral-high-400 font-bold rounded-e-md',
  },
  variants: {
    isSearchActive: {
      true: {
        wrapperSlot: 'translate-y-0 visible z-20',
      },
      false: {
        wrapperSlot: '-translate-y-full invisible opacity-transparent',
      },
    },
  },
})

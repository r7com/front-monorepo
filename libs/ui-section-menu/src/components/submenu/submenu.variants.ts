import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  base: 'smenu-fixed sm:smenu-absolute smenu-left-0 smenu-right-0 smenu-top-lg smenu-w-full sm:smenu-w-[210px] smenu-bg-neutral-high-400 smenu-shadow-drop smenu-z-10',
  variants: {
    isOpen: {
      true: 'smenu-block',
      false: 'smenu-hidden',
    },
  },
})

import { createVariants } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    dropdownContainerSlot: 'footer-mt-xxxs peer-checked: md:footer-mt-0 md:footer-block',
    dropdownIconSlot: 'footer-w-xxxs footer-h-xxxs footer-self-end footer-mb-nano md:footer-hidden',
  },
  variants: {
    isDropdownOpen: {
      true: {
        dropdownContainerSlot: 'footer-block',
        dropdownIconSlot: 'footer-rotate-180',
      },
      false: {
        dropdownContainerSlot: 'footer-hidden',
        dropdownIconSlot: '',
      },
    },
  },
})

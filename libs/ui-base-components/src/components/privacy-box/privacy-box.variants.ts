import { createVariants, VariantProps } from '../../utils'

export const variants = createVariants({
  base: '-base-bottom-full base-invisible -base-z-10 dark:base-bg-agerating-18anos-500 dark:base-border-solid dark:base-border-neutral-high-400 dark:base-border-[1px] base-mb-nano base-shadow-drop base-bg-neutral-high-400 base-rounded-lg base-fixed lg:base-w-[900px] base-w-9/12 base-left-0 base-right-0 base-m-auto base-transition-all base-duration-300',
  variants: {
    show: {
      true: '!base-z-50 !base-bottom-0 !base-visible',
      false: '',
    },
  },
})
export type PrivacyBoxVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  slots: {
    rootSlot: 'md:card-px-xxs card-rounded-md card-relative card-overflow-hidden',
    articleSlot: 'card-flex card-h-xl card-items-center',
    tagSlot:
      'card-rounded-sm card-text-[10px] md:card-text-xxs card-uppercase card-whitespace-nowrap card-font-bold card-flex card-items-center card-pt-[3px] card-px-nano card-pb-[5px] card-absolute md:card-relative card-left-0 card-top-0 card-z-10 card-bg-neutral-high-400 md:card-bg-transparent',
    imageSlot: 'md:card-ml-xxs card-w-[113px] md:card-w-huge',
    titleSlot:
      'card-ml-nano md:card-ml-xxs card-flex-1 card-text-xxxs md:card-text-xxs card-font-semibold',
  },
  variants: {
    theme: {
      urgent: {
        rootSlot: 'card-bg-breakingNews-urgent',
        tagSlot:
          'card-text-neutral-high-400 card-animate-breakingNews-urgent-glowing-mobile md:card-animate-breakingNews-urgent-glowing !card-bg-[#e03939]',
      },
      live: {
        rootSlot: 'card-bg-breakingNews-live',
        tagSlot:
          'before:card-inline-block before:card-align-middle before:card-w-nano before:card-h-nano before:card-rounded-circular before:card-mr-nano before:card-bg-[#e03939] before:card-content-[""] card-text-[#e03939]',
      },
      now: {
        rootSlot:
          'card-bg-breakingNews-now card-border-hairline card-border-[#bababa] card-box-border',
        tagSlot: '!-card-left-[1px] !-card-top-[1px] card-text-[#e03939]',
      },
    },
  },
})

export type BreakingNewsVariants = VariantProps<typeof variants>

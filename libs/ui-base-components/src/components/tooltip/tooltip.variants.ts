import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  slots: {
    tooltip:
      "base-bg-dark-low-400 base-w-max base-max-w-[164px] base-text-center base-shadow-level1 base-rounded-md base-transition-opacity base-ease-in-out base-duration-200 base-text-neutral-high-400 base-absolute base=p-nano after:base-content-[''] after:base-block after:base-absolute",
    target: 'base-inline-block',
    root: 'base-inline-block base-relative',
  },
  variants: {
    position: {
      top: {
        tooltip:
          'base-bottom-[calc(100%_+_10px)] base-translate-x-1/2 base-right-1/2 after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-b-[0px] after:base-border-t-[10px] after:base-border-t-solid after:base-border-t-dark-low-400 after:base-left-1/2 after:base-top-full after:-base-translate-x-1/2',
      },
      right: {
        tooltip:
          'base-left-[calc(100%_+_10px)] base-top-1/2 -base-translate-y-1/2 after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-l-[0px] after:base-border-r-[10px] after:base-border-r-solid after:base-border-r-dark-low-400 after:base-top-1/2 after:base-left-[1px] after:-base-translate-x-full after:-base-translate-y-1/2',
      },
      left: {
        tooltip:
          'base-right-[calc(100%_+_10px)] base-top-1/2 -base-translate-y-1/2 after:base-right-0 after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-r-[0px] after:base-border-l-[10px] after:base-border-l-dark-low-400 after:base-translate-x-full after:-base-translate-y-1/2 after:base-top-1/2',
      },
      bottom: {
        tooltip:
          'base-top-[calc(100%_+_10px)] base-translate-y-0 base-translate-x-1/2 base-right-1/2 after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-t-[0px] after:base-border-b-[10px] after:base-border-b-solid after:base-border-b-dark-low-400 after:base-left-1/2 after:base-bottom-full after:-base-translate-x-1/2',
      },
      'top-left': {
        tooltip:
          'base-bottom-[calc(100%_+_10px)] base-right-[calc(50%_-_1.2rem)] after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-b-[0px] after:base-border-t-[10px] after:base-border-t-solid after:base-border-t-dark-low-400 after:base-right-0 after:base-top-full after:-base-translate-x-1/2',
      },
      'top-right': {
        tooltip:
          'base-bottom-[calc(100%_+_10px)] base-left-[calc(50%_-_1.2rem)] after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-b-[0px] after:base-border-t-[10px] after:base-border-t-solid after:base-border-t-dark-low-400 after:base-top-full',
      },
      'bottom-right': {
        tooltip:
          'base-top-[calc(100%_+_10px)] base-left-[calc(50%_-_1rem)] after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-t-[0px] after:base-border-b-[10px] after:base-border-b-solid after:base-border-b-dark-low-400 after:base-bottom-full',
      },
      'bottom-left': {
        tooltip:
          'base-top-[calc(100%_+_10px)] base-right-[calc(50%_-_1.2rem)] after:base-border-[10px] after:base-border-solid after:base-border-transparent after:base-border-t-[0px] after:base-border-b-[10px] after:base-border-b-solid after:base-border-b-dark-low-400 after:base-bottom-full after:-base-translate-x-1/2 after:base-right-0',
      },
    },
    hover: {
      true: { tooltip: 'base-opacity-[1] base-z-10' },
      false: { tooltip: 'base-opacity-[0] -base-z-10' },
    },
  },
  compoundSlots: [
    {
      slots: ['root'],
      position: 'bottom-left',
      className: 'base-pb-nano',
    },
    {
      slots: ['root'],
      position: 'bottom-right',
      className: 'base-pb-nano',
    },
    {
      slots: ['root'],
      position: 'bottom',
      className: 'base-pb-nano',
    },
    {
      slots: ['root'],
      position: 'left',
      className: 'base-pl-nano',
    },
    {
      slots: ['root'],
      position: 'right',
      className: 'base-pr-nano',
    },
    {
      slots: ['root'],
      position: 'top',
      className: 'base-pt-nano',
    },
    {
      slots: ['root'],
      position: 'top-left',
      className: 'base-pt-nano',
    },
    {
      slots: ['root'],
      position: 'top-right',
      className: 'base-pt-nano',
    },
  ],
})

export type TooltipVariants = VariantProps<typeof variants>

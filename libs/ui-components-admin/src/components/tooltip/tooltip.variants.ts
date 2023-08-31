import { createVariants, VariantProps } from '@r7-front-monorepo/utils'

export const variants = createVariants({
  slots: {
    tooltip:
      "bg-dark-low-400 w-max max-w-[164px] text-center shadow-level1 rounded-md transition-opacity ease-in-out duration-200 text-neutral-high-400 absolute p-nano after:content-[''] after:block after:absolute",
    target: 'inline-block',
    root: 'inline-block relative',
  },
  variants: {
    position: {
      top: {
        tooltip:
          'bottom-[calc(100%_+_10px)] translate-x-1/2 right-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-dark-low-400 after:left-1/2 after:top-full after:-translate-x-1/2',
      },
      right: {
        tooltip:
          'left-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-l-[0px] after:border-r-[10px] after:border-r-solid after:border-r-dark-low-400 after:top-1/2 after:left-[1px] after:-translate-x-full after:-translate-y-1/2',
      },
      left: {
        tooltip:
          'right-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:right-0 after:border-[10px] after:border-solid after:border-transparent after:border-r-[0px] after:border-l-[10px] after:border-l-dark-low-400 after:translate-x-full after:-translate-y-1/2 after:top-1/2',
      },
      bottom: {
        tooltip:
          'top-[calc(100%_+_10px)] translate-y-0 translate-x-1/2 right-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-dark-low-400 after:left-1/2 after:bottom-full after:-translate-x-1/2',
      },
      'top-left': {
        tooltip:
          'bottom-[calc(100%_+_10px)] right-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-dark-low-400 after:right-0 after:top-full after:-translate-x-1/2',
      },
      'top-right': {
        tooltip:
          'bottom-[calc(100%_+_10px)] left-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-dark-low-400 after:top-full',
      },
      'bottom-right': {
        tooltip:
          'top-[calc(100%_+_10px)] left-[calc(50%_-_1rem)] after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-dark-low-400 after:bottom-full',
      },
      'bottom-left': {
        tooltip:
          'top-[calc(100%_+_10px)] right-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-dark-low-400 after:bottom-full after:-translate-x-1/2 after:right-0',
      },
    },
    hover: {
      true: { tooltip: 'opacity-[1] z-10' },
      false: { tooltip: 'opacity-[0] -z-10' },
    },
  },
  compoundSlots: [
    {
      slots: ['root'],
      position: 'bottom-left',
      className: 'pb-nano',
    },
    {
      slots: ['root'],
      position: 'bottom-right',
      className: 'pb-nano',
    },
    {
      slots: ['root'],
      position: 'bottom',
      className: 'pb-nano',
    },
    {
      slots: ['root'],
      position: 'left',
      className: 'pl-nano',
    },
    {
      slots: ['root'],
      position: 'right',
      className: 'pr-nano',
    },
    {
      slots: ['root'],
      position: 'top',
      className: 'pt-nano',
    },
    {
      slots: ['root'],
      position: 'top-left',
      className: 'pt-nano',
    },
    {
      slots: ['root'],
      position: 'top-right',
      className: 'pt-nano',
    },
  ],
})

export type TooltipVariants = VariantProps<typeof variants>

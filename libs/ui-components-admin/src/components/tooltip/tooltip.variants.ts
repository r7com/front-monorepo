import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  slots: {
    tooltip:
      'bg-dark-low-400 w-max rounded-md transition-opacity ease-in-out duration-200 text-neutral-high-400 absolute p-nano',
    target: 'inline-block',
  },
  variants: {
    position: {
      top: {
        tooltip:
          'left-1/2 -translate-y-[calc(100%_+_10px)] -translate-x-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-neutral-low-600 after:left-1/2 after:top-full after:-translate-x-1/2',
      },
      right: {
        tooltip:
          'left-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-l-[0px] after:border-r-[10px] after:border-r-solid after:border-r-neutral-low-600 after:top-1/2 after:left-[1px] after:-translate-x-full after:-translate-y-1/2',
      },
      left: {
        tooltip:
          'right-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:right-0 after:border-[10px] after:border-solid after:border-transparent after:left-1/2 after:border-r-[0px] after:border-l-[10px] after:border-l-neutral-low-600 after:translate-x-full after:-translate-y-1/2 after:top-1/2',
      },
      bottom: {
        tooltip:
          'top-[calc(100%_+_10px)] translate-y-0 translate-x-1/2 right-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-neutral-low-600 after:left-1/2 after:bottom-full after:-translate-x-1/2',
      },
      'top-left': {
        tooltip:
          '-translate-y-[calc(100%_+_10px)] right-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-neutral-low-600 after:right-0 after:top-full after:-translate-x-1/2',
      },
      'top-right': {
        tooltip:
          '-translate-y-[calc(100%_+_10px)] left-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-neutral-low-600 after:top-full',
      },
      'bottom-right': {
        tooltip:
          'top-[calc(100%_+_10px)] left-[calc(50%_-_1rem)] after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-neutral-low-600 after:bottom-full',
      },
      'bottom-left': {
        tooltip:
          'top-[calc(100%_+_10px)] right-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-neutral-low-600 after:bottom-full after:-translate-x-1/2 after:right-0',
      },
    },
    arrow: {
      true: {
        tooltip: "after:content-[''] after:block after:absolute",
      },
      false: '',
    },
    hover: {
      true: { tooltip: 'opacity-[1] z-10' },
      false: { tooltip: 'opacity-[0] -z-10' },
    },
    margin: {
      small: {},
      medium: {},
      large: {},
    },
  },
  compoundSlots: [
    {
      slots: ['tooltip'],
      position: 'bottom',
      margin: 'small',
      className: 'mt-quark',
    },
    {
      slots: ['tooltip'],
      position: 'bottom-left',
      margin: 'small',
      className: 'mt-quark',
    },
    {
      slots: ['tooltip'],
      position: 'bottom-right',
      margin: 'small',
      className: 'mt-quark',
    },
    {
      slots: ['tooltip'],
      position: 'left',
      margin: 'small',
      className: 'mr-quark',
    },
    {
      slots: ['tooltip'],
      position: 'right',
      margin: 'small',
      className: 'ml-quark',
    },
    {
      slots: ['tooltip'],
      position: 'top',
      margin: 'small',
      className: 'mb-quark',
    },
    {
      slots: ['tooltip'],
      position: 'top-left',
      margin: 'small',
      className: 'mb-quark',
    },
    {
      slots: ['tooltip'],
      position: 'top-right',
      margin: 'small',
      className: 'mb-quark',
    },
    // medium
    {
      slots: ['tooltip'],
      position: 'bottom-left',
      margin: 'medium',
      className: 'mt-nano',
    },
    {
      slots: ['tooltip'],
      position: 'bottom-right',
      margin: 'medium',
      className: 'mt-nano',
    },
    {
      slots: ['tooltip'],
      position: 'bottom',
      margin: 'medium',
      className: 'mt-nano',
    },
    {
      slots: ['tooltip'],
      position: 'left',
      margin: 'medium',
      className: 'mr-nano',
    },
    {
      slots: ['tooltip'],
      position: 'right',
      margin: 'medium',
      className: 'ml-nano',
    },
    {
      slots: ['tooltip'],
      position: 'top',
      margin: 'medium',
      className: 'mb-nano',
    },
    {
      slots: ['tooltip'],
      position: 'top-left',
      margin: 'medium',
      className: 'mb-nano',
    },
    {
      slots: ['tooltip'],
      position: 'top-right',
      margin: 'medium',
      className: 'mb-nano',
    },
    // large
    {
      slots: ['tooltip'],
      position: 'bottom-left',
      margin: 'large',
      className: 'mt-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'bottom-right',
      margin: 'large',
      className: 'mt-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'bottom',
      margin: 'large',
      className: 'mt-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'left',
      margin: 'large',
      className: 'mr-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'right',
      margin: 'large',
      className: 'ml-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'top',
      margin: 'large',
      className: 'mb-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'top-left',
      margin: 'large',
      className: 'mb-xxxs',
    },
    {
      slots: ['tooltip'],
      position: 'top-right',
      margin: 'large',
      className: 'mb-xxxs',
    },
  ],
})

export type TooltipVariants = VariantProps<typeof variants>

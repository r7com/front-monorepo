import { tv, type VariantProps } from 'tailwind-variants'

export const variants = tv({
  base: 'bg-dark-low-400 w-[208px] rounded-md transition-opacity ease-in-out duration-200 text-neutral-high-400 absolute p-nano',
  variants: {
    position: {
      top: `left-1/2 -translate-y-[calc(100%_+_10px)] -translate-x-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-neutral-low-600 after:left-1/2 after:top-full after:-translate-x-1/2`,
      right: `-right-0 top-1/2 translate-x-full -translate-y-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-l-[0px] after:border-r-[10px] after:border-r-solid after:border-r-neutral-low-600 after:top-1/2 after:left-[1px] after:-translate-x-full after:-translate-y-1/2`,
      left: `after:right-0 after:border-[10px] after:border-solid after:border-transparent after:left-1/2 after:border-r-[0px] after:border-l-[10px] after:border-l-neutral-low-600 right-[calc(100%_+_10px)] top-1/2 -translate-y-1/2 after:translate-x-full after:-translate-y-1/2 after:top-1/2`,
      bottom: `top-[calc(100%_+_10px)] translate-y-0 translate-x-1/2 right-1/2 after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-neutral-low-600 after:left-1/2 after:bottom-full after:-translate-x-1/2`,
      'top-right': `-translate-y-[calc(100%_+_10px)] right-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-neutral-low-600 after:right-0 after:top-full after:-translate-x-1/2`,
      'top-left': `-translate-y-[calc(100%_+_10px)] left-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[10px] after:border-t-solid after:border-t-neutral-low-600 after:top-full`,
      'bottom-left': `top-[calc(100%_+_10px)] left-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-neutral-low-600 after:bottom-full`,
      'bottom-right': `top-[calc(100%_+_10px)] right-[calc(50%_-_1.2rem)] after:border-[10px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[10px] after:border-b-solid after:border-b-neutral-low-600 after:bottom-full after:-translate-x-1/2 after:right-0`,
    },
    arrow: {
      true: "after:content-[''] after:block after:absolute",
      false: '',
    },
    hover: {
      true: 'opacity-[1] z-10',
      false: 'opacity-[0] -z-10',
    },
  },
})

export type TooltipVariants = VariantProps<typeof variants>

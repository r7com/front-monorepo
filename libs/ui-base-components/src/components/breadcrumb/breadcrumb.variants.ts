import { createVariants, VariantProps } from '../../utils'

export const variants = createVariants({
  base: `base-hidden base-text-xxxs base-text-neutral-low-400 base-font-normal
    last:base-flex first:base-flex md:base-flex after:base-border-t-hairline
    after:base-content-[' '] after:base-w-[6px] after:base-h-[6px] after:base-rotate-45
    after:base-cursor-pointer after:base-block base-items-center base-capitalize
    after:base-border-r-hairline after:base-border-r-neutral-low-500 
    after:base-border-t-neutral-low-500 after:base-border-solid 
    after:base-mx-nano last:after:base-content-none
    dark:after:base-border-r-neutral-high-400 dark:after:base-border-t-neutral-high-400
    last:base-font-semibold last:base-text-neutral-low-500 dark:last:base-text-neutral-high-400`,
})

export type BreadcrumbVariants = VariantProps<typeof variants>

import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: `base-hidden base-text-xxxs base-text-neutral-low-400 base-font-normal
    last:base-flex first:base-flex md:base-flex after:base-border-t-hairline
    after:base-content-[' '] after:base-w-[6px] after:base-h-[6px] after:base-rotate-45
    after:base-cursor-pointer after:base-block base-items-center base-capitalize
    after:base-border-r-hairline after:base-border-r-neutral-low-500
    after:base-border-t-neutral-low-500 after:base-border-solid
    after:base-mx-nano last:after:base-content-none
    last:base-font-semibold last:base-text-neutral-low-500`,
})

export type BreadcrumbVariants = VariantProps<typeof variants>

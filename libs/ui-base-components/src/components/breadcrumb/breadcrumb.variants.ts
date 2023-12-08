import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: "base-hidden base-text-xxxs base-text-neutral-low-400 last:base-flex first:base-flex md:base-flex after:base-content-['/'] after:base-block base-items-center base-capitalize after:base-mx-quark last:after:base-content-none last:base-font-bold",
})

export type BreadcrumbVariants = VariantProps<typeof variants>

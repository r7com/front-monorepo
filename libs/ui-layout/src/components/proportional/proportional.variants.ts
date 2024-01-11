import { createVariants, VariantProps } from '@r7/ui-base-components'

export const variants = createVariants({
  variants: {
    cols: {
      1: 'layout-col-span-24',
      2: 'md:layout-col-span-12',
      3: 'layout-col-span-24 md:layout-col-span-8',
      4: 'lg:layout-col-span-6 md:layout-col-span-12',
    },
  },
})

export type ProportionalVariants = VariantProps<typeof variants>

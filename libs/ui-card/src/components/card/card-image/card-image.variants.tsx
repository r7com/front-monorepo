import { VariantProps, createVariants } from '@r7/tools'

export const variants = createVariants({
  base: 'rounded-md overflow-hidden relative',
  variants: {
    format: {
      square: 'aspect-square',
      landscape: 'aspect-landscape',
      portrait: 'aspect-portrait',
    },
    shadow: {
      true: 'after:absolute after:inset-0 after:pointer-events-none after:bg-gradient-to-b from-transparent to-[#000] after:opacity-intense',
      false: '',
    },
  },
})

export type CardImageVariants = VariantProps<typeof variants>

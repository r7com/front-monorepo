import { createVariants, VariantProps } from '@r7/tools'

export const variants = createVariants({
  base: 'flex justify-around items-center px-nano h-auto w-full bg-editorial-color',
  variants: {
    fixed: {
      true: 'fixed',
    },
  },
})

/**
 * variante 'fixed' sera usada apenas internamente
 * pelo componente e nao deve ser exposta como uma 'prop'
 */
export type HeaderVariants = Omit<VariantProps<typeof variants>, 'fixed'>

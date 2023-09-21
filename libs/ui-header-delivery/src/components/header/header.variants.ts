import { createVariants, VariantProps } from '@r7-jarvics/tools'

export const variants = createVariants({
  base: 'h-auto sm:h-[50px] w-full bg-editorial-color',
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

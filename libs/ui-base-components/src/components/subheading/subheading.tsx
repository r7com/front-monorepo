import { SubheadingVariants, variants } from './subheading.variants'

export type SubheadingProps = {
  children: React.ReactNode
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & SubheadingVariants

export function Subheading({ children, as = 'h2', size = 'large' }: SubheadingProps) {
  const DynamicTag = as || 'h2'

  return <DynamicTag className={variants({ size })}>{children}</DynamicTag>
}

import { HeadingVariants, variants } from './heading.variants'

export type HeadingProps = {
  children?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & HeadingVariants

export function Heading({
  children,
  as = 'h1',
  size = 'large',
  color = 'neutralLow',
}: HeadingProps) {
  const DynamicTag = as || 'h1'

  return <DynamicTag className={variants({ size, color })}>{children}</DynamicTag>
}

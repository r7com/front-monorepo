import { SubheadingVariants, variants } from './subheading.variants'

export type SubheadingProps = {
  children?: React.ReactNode
  dangerHTML?: string
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & SubheadingVariants

export function Subheading({
  children,
  dangerHTML,
  as = 'h2',
  size = 'large',
  color = 'neutralLow',
}: SubheadingProps) {
  const DynamicTag = as || 'h2'

  return (
    <DynamicTag
      className={variants({ size, color })}
      dangerouslySetInnerHTML={dangerHTML ? { __html: dangerHTML } : undefined}
    >
      {children ? children : null}
    </DynamicTag>
  )
}

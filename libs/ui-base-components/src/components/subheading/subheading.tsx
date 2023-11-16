import { SubheadingVariants, variants } from './subheading.variants'

export type SubheadingProps = {
  children?: React.ReactNode
  hasHTML?: string
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & SubheadingVariants

export function Subheading({
  children,
  hasHTML,
  as = 'h2',
  size = 'large',
  color = 'neutralLow',
}: SubheadingProps) {
  const DynamicTag = as || 'h2'

  return (
    <DynamicTag
      className={variants({ size, color })}
      dangerouslySetInnerHTML={hasHTML ? { __html: hasHTML } : undefined}
    >
      {!hasHTML ? children : undefined}
    </DynamicTag>
  )
}

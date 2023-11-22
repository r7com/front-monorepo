import { HeadingVariants, variants } from './heading.variants'

export type HeadingProps = {
  children?: React.ReactNode
  dangerHTML?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & HeadingVariants

export function Heading({
  children,
  dangerHTML,
  as = 'h1',
  size = 'large',
  color = 'neutralLow',
}: HeadingProps) {
  const DynamicTag = as || 'h1'

  return (
    <DynamicTag
      className={variants({ size, color })}
      dangerouslySetInnerHTML={dangerHTML ? { __html: dangerHTML } : undefined}
    >
      {!dangerHTML ? children : null}
    </DynamicTag>
  )
}

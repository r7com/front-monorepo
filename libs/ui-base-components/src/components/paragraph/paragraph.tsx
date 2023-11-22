import React from 'react'
import { ParagraphVariants, variants } from './paragraph.variants'
export type ParagraphProps<C extends React.ElementType> = {
  children?: React.ReactNode
  dangerHTML?: string
  as?: C
} & ParagraphVariants

export function Paragraph<C extends React.ElementType = 'p'>({
  children,
  dangerHTML,
  as,
  fontWeight = 'normal',
  color = 'neutralLow',
  fontSize = 'xxxs',
  fontFamily = 'openSans',
}: ParagraphProps<C>) {
  const DynamicTag = as || 'p'

  return (
    <DynamicTag
      className={variants({ fontSize, fontWeight, fontFamily, color })}
      dangerouslySetInnerHTML={dangerHTML ? { __html: dangerHTML } : undefined}
    >
      {children ? children : null}
    </DynamicTag>
  )
}

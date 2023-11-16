import React from 'react'
import { ParagraphVariants, variants } from './paragraph.variants'
export type ParagraphProps<C extends React.ElementType> = {
  children?: React.ReactNode
  hasHTML?: string
  as?: C
} & ParagraphVariants

export function Paragraph<C extends React.ElementType = 'p'>({
  children,
  hasHTML,
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
      dangerouslySetInnerHTML={hasHTML ? { __html: hasHTML } : undefined}
    >
      {!hasHTML ? children : undefined}
    </DynamicTag>
  )
}

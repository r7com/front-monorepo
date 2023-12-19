import React from 'react'
import { TypographyVariants, variants } from './typography.variants'
export type TypographyProps<C extends React.ElementType> = {
  children?: React.ReactNode
  dangerHTML?: string
  as?: C
  className?: string
} & TypographyVariants

export function Typography<C extends React.ElementType = 'p'>({
  children,
  dangerHTML,
  as,
  fontWeight = 'normal',
  color = 'neutralLow',
  fontSize = 'xxxs',
  fontFamily = 'openSans',
  className,
}: TypographyProps<C>) {
  const DynamicTag = as || 'p'

  return (
    <DynamicTag
      className={className ?? variants({ fontSize, fontWeight, fontFamily, color })}
      dangerouslySetInnerHTML={dangerHTML ? { __html: dangerHTML } : undefined}
    >
      {!dangerHTML ? children : null}
    </DynamicTag>
  )
}

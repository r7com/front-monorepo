import React from 'react'
import { TextVariants, variants } from './text.variants'
export type TextProps<C extends React.ElementType> = {
  children: React.ReactNode
  as?: C
} & TextVariants

export function Text<C extends React.ElementType>({
  children,
  as,
  fontWeight = 'normal',
  color = 'neutralLow',
  fontSize = 'xxxs',
  fontFamily = 'openSans',
}: TextProps<C>) {
  const DynamicTag = as || 'p'

  return (
    <DynamicTag className={variants({ fontSize, fontWeight, fontFamily, color })}>
      {children}
    </DynamicTag>
  )
}

import React from 'react'
import { TitleVariants, variants } from './card-title.variants'
export type TitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  fontStyle?:
    | 'heading-level-1'
    | 'heading-level-2'
    | 'heading-level-3'
    | 'heading-level-4'
    | 'heading-level-5'
    | 'heading-level-6'
} & TitleVariants
export function CardTitle({ children, as, fontStyle = 'heading-level-3' }: TitleProps) {
  const DynamicTag = as || 'h3'

  return <DynamicTag className={`font-open-sans ${variants({ fontStyle })}`}>{children}</DynamicTag>
}

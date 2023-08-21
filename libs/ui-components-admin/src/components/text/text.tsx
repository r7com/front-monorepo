import React from 'react'
export type TextProps<C extends React.ElementType> = {
  children: React.ReactNode
  fontSize?:
    | 'text-little'
    | 'text-xxxs'
    | 'text-xxs'
    | 'text-xs'
    | 'text-sm'
    | 'text-md'
    | 'text-lg'
    | 'text-xl'
    | 'text-xxl'
    | 'text-xxxl'

  fontWeight?: 'font-light' | 'font-normal' | 'font-semibold' | 'font-bold'
  as?: C
  color?:
    | 'text-dark-high-400'
    | 'text-dark-high-500'
    | 'text-feedback-success-400'
    | 'text-feedback-warning-400'
    | 'text-feedback-helper-400'
    | 'text-brand-primary-400'
    | 'text-brand-primary-500'

  fontFamily?: 'font-open-sans' | 'font-times-new-roman'
}

export function Text<C extends React.ElementType>({
  children,
  fontWeight = 'font-normal',
  color = 'text-dark-high-400',
  as,
  fontSize = 'text-xxxs',
  fontFamily = 'font-open-sans',
}: TextProps<C>) {
  const DynamicTag = as || 'p'
  return (
    <DynamicTag data-testid="text" className={`${fontSize} ${fontWeight} ${color} ${fontFamily}`}>
      {children}
    </DynamicTag>
  )
}

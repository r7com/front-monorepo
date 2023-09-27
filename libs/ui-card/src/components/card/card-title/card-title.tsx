import React from 'react'
export type TitleProps<C extends React.ElementType> = {
  children: React.ReactNode
  as?: C
}
export function CardTitle<C extends React.ElementType = 'h3'>({ children, as }: TitleProps<C>) {
  const DynamicTag = as || 'h3'
  return <DynamicTag>{children}</DynamicTag>
}

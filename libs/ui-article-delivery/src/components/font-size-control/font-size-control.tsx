import { ReactNode } from 'react'
import { FontSizeControlDecrease } from './font-size-control-decrease'
import { FontSizeControlIncrease } from './font-size-control-increase'

export type FontSizeControlProps = {
  children: ReactNode
}

export function FontSizeControl({ children }: FontSizeControlProps) {
  return <>{children}</>
}

FontSizeControl.Increase = FontSizeControlIncrease
FontSizeControl.Decrease = FontSizeControlDecrease

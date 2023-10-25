import { ReactNode } from 'react'
import { FontSizeChangerDecrease } from './font-size-changer-decrease'
import { FontSizeChangerIncrease } from './font-size-changer-increase'

export type FontSizeChangerProps = {
  children: ReactNode
}

export function FontSizeChanger({ children }: FontSizeChangerProps) {
  return <div className="flex">{children}</div>
}

FontSizeChanger.Increase = FontSizeChangerIncrease
FontSizeChanger.Decrease = FontSizeChangerDecrease

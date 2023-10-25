import { ReactNode } from 'react'
import { FontSizeChangerDecrease } from '../font-size-changer-increase'
import { FontSizeChangerIncrease } from '../font-size-changer-decrease'

export type FontSizeChangerRootProps = {
  children: ReactNode
}

export function FontSizeChangerRoot({ children }: FontSizeChangerRootProps) {
  return <div>{children}</div>
}

FontSizeChangerRoot.Decrease = FontSizeChangerDecrease
FontSizeChangerRoot.Increase = FontSizeChangerIncrease

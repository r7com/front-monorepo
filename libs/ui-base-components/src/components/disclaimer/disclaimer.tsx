import { variants } from './disclaimer.variants'

export type DisclaimerProps = {
  children: React.ReactNode
  bgColor?: string
  color?: 'high' | 'low'
}

export function Disclaimer({ children, bgColor, color = 'low' }: DisclaimerProps) {
  return (
    <div className={variants({ color })} style={{ backgroundColor: bgColor }}>
      <p>{children}</p>
    </div>
  )
}

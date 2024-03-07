import { variants } from './disclaimer.variants'

export type DisclaimerProps = {
  children: React.ReactNode
  bgColor?: string
  color?: 'high' | 'low'
}

export function Disclaimer({ children, bgColor = 'transparent', color = 'low' }: DisclaimerProps) {
  return (
    <div className={variants({ color })} style={{ backgroundColor: bgColor, color }}>
      <p>{children}</p>
    </div>
  )
}

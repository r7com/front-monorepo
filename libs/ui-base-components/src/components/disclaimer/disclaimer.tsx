import { DisclaimerVariants, variants } from './disclaimer.variants'

export type DisclaimerProps = {
  children: React.ReactNode
  bgColor?: string
} & DisclaimerVariants

export function Disclaimer({ children, bgColor, color = 'low' }: DisclaimerProps) {
  return (
    <div
      className={variants({ color })}
      style={{ backgroundColor: bgColor }}
      data-testid="disclaimer"
    >
      <p>{children}</p>
    </div>
  )
}

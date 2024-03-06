import { variants } from './informer.variants'

export type InformerProps = {
  children: React.ReactNode
  bgColor?: string
  color?: 'high' | 'low'
}

export function Informer({ children, bgColor = 'transparent', color = 'low' }: InformerProps) {
  return (
    <div className={variants({ color })} style={{ backgroundColor: bgColor, color }}>
      <p>{children}</p>
    </div>
  )
}

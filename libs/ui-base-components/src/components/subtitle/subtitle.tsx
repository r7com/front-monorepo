import { SubtitleVariants, variants } from './subtitle.variants'

export type SubtitleProps = {
  children: React.ReactNode
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & SubtitleVariants

export function Subtitle({ children, as = 'h2', size = 'large' }: SubtitleProps) {
  const DynamicTag = as || 'h2'

  return <DynamicTag className={variants({ size })}>{children}</DynamicTag>
}

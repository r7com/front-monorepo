import { TitleVariants, variants } from './title.variants'

export type TitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & TitleVariants

export function Title({ children, as = 'h1', size = 'large' }: TitleProps) {
  const DynamicTag = as || 'h1'

  return <DynamicTag className={variants({ size })}>{children}</DynamicTag>
}

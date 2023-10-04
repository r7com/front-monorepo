import { CardTitleVariants, variants } from './card-title.variants'

export type CardTitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & CardTitleVariants

export function CardTitle({ children, as, fontStyle = 'heading-level-3' }: CardTitleProps) {
  const DynamicTag = as || 'h3'
  return <DynamicTag className={variants({ fontStyle })}>{children}</DynamicTag>
}

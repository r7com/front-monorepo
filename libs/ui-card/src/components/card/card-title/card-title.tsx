import { CardTitleVariants, variants } from './card-title.variants'

export type CardTitleProps = {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
} & CardTitleVariants

export function CardTitle({
  children,
  as,
  className = '',
  fontStyle = 'heading-level-2',
  color = 'low',
}: CardTitleProps) {
  const DynamicTag = as || 'h3'
  return (
    <DynamicTag className={`${variants({ fontStyle, color })} ${className}`}>{children}</DynamicTag>
  )
}

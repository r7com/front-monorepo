import { CardHatTitleVariants, variants } from './card-hat-title.variants'

export type CardHatTitleProps = {
  children: React.ReactNode
} & CardHatTitleVariants

export function CardHatTitle({ children, color = 'low', size = 'small' }: CardHatTitleProps) {
  return <span className={variants({ color, size })}>{children}</span>
}

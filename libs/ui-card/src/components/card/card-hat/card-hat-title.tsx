import { CardHatTitleVariants, variants } from './card-hat-title.variants'

export type CardHatTitleProps = {
  children: React.ReactNode
} & CardHatTitleVariants

export function CardHatTitle({ children, color = 'low' }: CardHatTitleProps) {
  return <p className={variants({ color })}>{children}</p>
}

import { CardCupomContent } from './card-cupom-content'
import { CardCupomItem } from './card-cupom-item'
import { CardCupomList } from './card-cupom-list'

export type CardCupomProps = {
  children: React.ReactNode
}
export function CardCupom({ children }: CardCupomProps) {
  return (
    <section role="contentinfo" className="card-bg-neutral-high-500 card-p-xxxs rounded-md">
      {children}
    </section>
  )
}

CardCupom.List = CardCupomList
CardCupom.Item = CardCupomItem
CardCupom.Content = CardCupomContent

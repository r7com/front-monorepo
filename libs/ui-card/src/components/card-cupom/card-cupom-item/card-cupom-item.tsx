type CardCupomItemProps = {
  children: React.ReactNode
}

export function CardCupomItem({ children }: CardCupomItemProps) {
  return <li className="card-border-dashed card-py-nano">{children}</li>
}

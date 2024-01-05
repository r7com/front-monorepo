type CardCupomListProps = {
  children: React.ReactNode
}

export function CardCupomList({ children }: CardCupomListProps) {
  return (
    <ul className="card-divide-y-hairline card-border-y-hairline card-border-dashed card-mt-xxxs">
      {children}
    </ul>
  )
}

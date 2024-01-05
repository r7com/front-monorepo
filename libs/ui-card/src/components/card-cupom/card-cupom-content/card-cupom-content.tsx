type CardCupomContentProps = {
  children: React.ReactNode
}

export function CardCupomContent({ children }: CardCupomContentProps) {
  return <div className="card-flex card-items-center">{children}</div>
}

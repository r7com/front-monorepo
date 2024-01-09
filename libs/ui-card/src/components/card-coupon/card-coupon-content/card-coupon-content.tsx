type CardCouponContentProps = {
  children: React.ReactNode
}

export function CardCouponContent({ children }: CardCouponContentProps) {
  return <div className="card-flex card-items-center">{children}</div>
}

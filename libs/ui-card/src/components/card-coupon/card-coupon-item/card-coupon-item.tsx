type CardCouponItemProps = {
  children: React.ReactNode
}

export function CardCouponItem({ children }: CardCouponItemProps) {
  return <li className="card-border-dashed card-py-nano">{children}</li>
}

type CardCouponItemProps = {
  children: React.ReactNode
}

export function CardCouponItem({ children }: CardCouponItemProps) {
  return (
    <li className="card-border-dashed card-py-nano dark:card-border-neutral-high-400">
      {children}
    </li>
  )
}

type CardCouponListProps = {
  children: React.ReactNode
}

export function CardCouponList({ children }: CardCouponListProps) {
  return (
    <ul className="card-divide-y-hairline card-border-y-hairline card-border-dashed card-mt-xxxs dark:card-border-neutral-high-400">
      {children}
    </ul>
  )
}

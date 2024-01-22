import { CardCouponContent } from './card-coupon-content'
import { CardCouponImage } from './card-coupon-image'
import { CardCouponItem } from './card-coupon-item'
import { CardCouponList } from './card-coupon-list'

export type CardCouponProps = {
  children: React.ReactNode
}
export function CardCoupon({ children }: CardCouponProps) {
  return (
    <section
      role="contentinfo"
      className="card-bg-neutral-high-500 card-p-xxxs rounded-md card-font-primary dark:card-bg-agerating-18anos-500"
    >
      {children}
    </section>
  )
}

CardCoupon.List = CardCouponList
CardCoupon.Item = CardCouponItem
CardCoupon.Content = CardCouponContent
CardCoupon.Image = CardCouponImage

type CardCouponImageProps = {
  logo: string
  alt: string
}

export function CardCouponImage({ logo, alt }: CardCouponImageProps) {
  return (
    <img
      className="card-mr-xxxs card-rounded-md dark:card-grayscale"
      src={logo}
      alt={alt}
      loading="lazy"
      height={58}
      width={58}
    />
  )
}

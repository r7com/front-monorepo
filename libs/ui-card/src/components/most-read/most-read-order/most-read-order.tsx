type MostReadOrderProps = {
  children: React.ReactNode
  order: number
}

export function MostReadOrder({ children, order }: MostReadOrderProps) {
  return (
    <span
      data-order={order}
      className="before:card-text-transparent before:card-bg-[linear-gradient(180deg,_#c6c1c1,_#e7e7e7)] before:card-content-[attr(data-order)] before:card-text-[110px] before:card-font-extrabold before:card-absolute before:card-leading-[80px] before:card-right-0 before:card-bg-clip-text before:-card-z-10 card-block card-relative card-min-h-[90px]"
    >
      {children}
    </span>
  )
}

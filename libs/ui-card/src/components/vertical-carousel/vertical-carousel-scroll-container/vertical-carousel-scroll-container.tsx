export type VerticalCarouselScrollContainerProps = {
  children: React.ReactNode
}

export function VerticalCarouselScrollContainer({
  children,
  ...props
}: VerticalCarouselScrollContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="card-w-full card-flex card-flex-nowrap card-shrink-0 card-overflow-x-hidden card-gap-xxxs"
      {...props}
    >
      {children}
    </div>
  )
}

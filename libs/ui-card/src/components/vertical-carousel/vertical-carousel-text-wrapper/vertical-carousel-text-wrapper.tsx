export type VerticalCarouselTextWrapperProps = {
  children: React.ReactNode
}

export function VerticalCarouselTextWrapper({
  children,
  ...props
}: VerticalCarouselTextWrapperProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full card-absolute card-bottom-0 card-p-xxxs" {...props}>
      {children}
    </div>
  )
}

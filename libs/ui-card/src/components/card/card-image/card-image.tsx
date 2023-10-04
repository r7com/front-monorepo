export type CardImageProps = {
  className?: string
  children: React.ReactNode
}

export function CardImage({ className, children }: CardImageProps) {
  return <figure className={`rounded-md overflow-hidden relative ${className}`}>{children}</figure>
}

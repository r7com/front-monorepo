export type RootProps = {
  children: React.ReactNode
}

export function CardRoot({ children }: RootProps) {
  return <article>{children}</article>
}

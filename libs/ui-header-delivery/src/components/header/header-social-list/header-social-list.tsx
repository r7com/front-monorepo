export type HeaderSocialListProps = {
  children: React.ReactNode
}

export function HeaderSocialList({ children }: HeaderSocialListProps) {
  return (
    <ul
      className="mr-sm hidden sm:flex h-full items-center"
      aria-label="Redes sociais para compartilhar"
    >
      {children}
    </ul>
  )
}

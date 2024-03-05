export type HeaderSocialListProps = {
  children: React.ReactNode
}

export function HeaderSocialList({ children }: HeaderSocialListProps) {
  return (
    <ul
      className="header-mr-sm header-hidden lg:header-flex header-h-full header-items-center"
      aria-label="Redes sociais para compartilhar"
    >
      {children}
    </ul>
  )
}

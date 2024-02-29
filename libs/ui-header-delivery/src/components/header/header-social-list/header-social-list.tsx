export type HeaderSocialListProps = {
  children: React.ReactNode
}

export function HeaderSocialList({ children }: HeaderSocialListProps) {
  return (
    <>
      <ul
        className="header-mr-quark header-hidden lg:header-flex header-h-full header-items-center"
        aria-label="Redes sociais para compartilhar"
      >
        {children}
      </ul>
      <span className="header-bg-neutral-high-400 header-w-[1px] header-h-[25px] header-ml-nano header-mr-nano header-opacity-intense header-hidden lg:header-block"></span>
    </>
  )
}

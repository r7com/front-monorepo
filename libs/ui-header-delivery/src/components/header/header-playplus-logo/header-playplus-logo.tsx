export type HeaderPlayPlusLogoProps = {
  link: string
  logoUrl: string
  alt: string
  isHome?: boolean
}

export function HeaderPlayPlusLogo({
  logoUrl,
  link,
  alt,
  isHome = false,
}: HeaderPlayPlusLogoProps) {
  return (
    <div className="lg:header-mr-sm lg:header-ml-xxs">
      <a href={link} title="PlayPlus">
        <img aria-labelledby="logo-playplus" src={logoUrl} alt={alt} width={36} height={40} />
        {isHome && (
          <h1 id="logo-playplus" className="header-sr-only">
            playplus.com
          </h1>
        )}
      </a>
    </div>
  )
}

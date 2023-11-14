export type HeaderLogoProps = {
  link: string
  logoUrl: string
  alt: string
  isHome?: boolean
}

export function HeaderLogo({ logoUrl, link, alt, isHome = false }: HeaderLogoProps) {
  return (
    <div className="sm:mr-sm sm:ml-xxs">
      <a href={link} title="Portal R7">
        <img aria-labelledby="logo-r7com" src={logoUrl} alt={alt} width={36} height={40} />
        {isHome && (
          <h1 id="logo-r7com" className="sr-only">
            R7.com
          </h1>
        )}
      </a>
    </div>
  )
}

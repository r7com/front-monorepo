export type HeaderLogoProps = {
  link: string
  logoUrl: string
  alt: string
}

export function HeaderLogo({ logoUrl, link, alt }: HeaderLogoProps) {
  return (
    <div className="sm:mr-sm sm:ml-xxs">
      <a href={link} title="Portal R7">
        <img src={logoUrl} loading="lazy" alt={alt} width={36} height={40} />
      </a>
    </div>
  )
}

export type HeaderLogoProps = {
  link: string
  logoUrl: string
  alt: string
}

export function HeaderLogo({ logoUrl, link, alt }: HeaderLogoProps) {
  return (
    <div className="sm:mr-sm sm:ml-xxs">
      <a href={link} title="r7-logo">
        <img src={logoUrl} loading="lazy" alt={alt} />
      </a>
    </div>
  )
}

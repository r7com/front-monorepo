import { HeaderPlayPlusVariants, variants } from './header-playplus-logo.variants'

export type HeaderPlayPlusLogoProps = {
  link: string
  logoUrl: string
  alt: string
  isHome?: boolean
} & HeaderPlayPlusVariants

export function HeaderPlayPlusLogo({
  logoUrl,
  link,
  alt,
  isHome = false,
  color,
}: HeaderPlayPlusLogoProps) {
  return (
    <div className={variants({ color })}>
      <a href={link} title="PlayPlus">
        <img aria-labelledby="logo-playplus" src={logoUrl} alt={alt} width={91} height={24} />

        {isHome && (
          <h1 id="logo-playplus" className="header-sr-only">
            playplus.com
          </h1>
        )}
      </a>
    </div>
  )
}

export type HeaderLogoProps = {
  link: string
  image: React.ReactNode
}

export function HeaderLogo({ image, link }: HeaderLogoProps) {
  return (
    <div className="sm:mr-sm sm:ml-xxs">
      <a href={link} title="r7-logo">
        {image}
      </a>
    </div>
  )
}

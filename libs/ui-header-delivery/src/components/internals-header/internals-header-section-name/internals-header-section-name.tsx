export type InternalsHeaderSectionNameProps = {
  sectionUrl: string
  children: React.ReactNode
}

export function InternalsHeaderSectionName({
  sectionUrl,
  children,
}: InternalsHeaderSectionNameProps) {
  return (
    <>
      <a
        className="header-uppercase header-font-bold header-text-editorial-color"
        href={sectionUrl}
      >
        {children}
      </a>

      <span className="header-mx-nano">|</span>
    </>
  )
}

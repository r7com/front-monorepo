export type InternalsHeaderSectionNameProps = {
  sectionUrl: string
  sectionColor?: string
  children: React.ReactNode
}

export function InternalsHeaderSectionName({
  sectionUrl,
  children,
  sectionColor,
}: InternalsHeaderSectionNameProps) {
  return (
    <>
      <a
        className="header-uppercase header-font-bold header-text-editorial-color"
        href={sectionUrl}
        style={{ color: sectionColor || undefined }}
      >
        {children}
      </a>

      <span className="header-mx-nano">|</span>
    </>
  )
}

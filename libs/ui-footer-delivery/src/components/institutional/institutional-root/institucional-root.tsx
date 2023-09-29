export type InstitutionalRootProps = {
  bgColor?: string
  children: React.ReactNode
}

export function InstitutionalRoot({ bgColor, children }: InstitutionalRootProps) {
  return (
    <section
      className="bg-editorial-color pt-xs lg:pt-sm lg:px-huge lg:pb-xs pb-xxxs"
      style={{ backgroundColor: bgColor || undefined }}
      aria-label="Links para sites institucionais"
    >
      {children}
    </section>
  )
}

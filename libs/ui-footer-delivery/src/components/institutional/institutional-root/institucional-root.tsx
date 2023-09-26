export type InstitutionalRootProps = {
  editorialColor?: string
  children: React.ReactNode
}

export function InstitutionalRoot({ editorialColor, children }: InstitutionalRootProps) {
  return (
    <section
      className="bg-editorial-color pt-xs lg:pt-sm lg:px-huge lg:pb-xs pb-xxxs"
      style={{ backgroundColor: editorialColor ? editorialColor : '' }}
      aria-label="Links para sites institucionais"
    >
      {children}
    </section>
  )
}

export type InstitutionalRootProps = {
  editorialColor?: string
  children: React.ReactNode
}

export function InstitutionalRoot({ editorialColor, children }: InstitutionalRootProps) {
  return (
    <section
      className="bg-editorial-color pt-xs lg:pt-sm lg:px-huge lg:pb-xs pb-xxxs"
      style={{ backgroundColor: editorialColor ? editorialColor : '' }}
      data-testid="institutional"
      aria-label="Institucional"
    >
      {children}
    </section>
  )
}

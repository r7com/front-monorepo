export type RootInstitucionalProps = {
  editorialColor?: string
  children: React.ReactNode
}

export function RootInstitucional({ editorialColor, children }: RootInstitucionalProps) {
  return (
    <section
      className="bg-editorial-color pt-xs lg:pt-sm lg:px-huge lg:pb-xs pb-xxxs"
      style={{ backgroundColor: editorialColor ?? undefined }}
      data-testid="institucional"
      aria-label="institucional"
    >
      {children}
    </section>
  )
}

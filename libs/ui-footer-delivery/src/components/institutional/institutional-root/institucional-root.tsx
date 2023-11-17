export type InstitutionalRootProps = {
  bgColor?: string
  children: React.ReactNode
}

export function InstitutionalRoot({ bgColor, children }: InstitutionalRootProps) {
  return (
    <section
      className="footer-bg-editorial-color footer-pt-xs lg:footer-pt-sm lg:footer-px-huge lg:footer-pb-xs footer-pb-xxxs"
      style={{ backgroundColor: bgColor || undefined }}
      aria-label="Links para sites institucionais"
    >
      {children}
    </section>
  )
}

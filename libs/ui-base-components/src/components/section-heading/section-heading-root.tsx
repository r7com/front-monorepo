export type SectionHeadingRootProps = {
  children: React.ReactNode
  color: string
}

export function SectionHeadingRoot({ children, color = '#556373' }: SectionHeadingRootProps) {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap items-center gap-nano py-xxxs"
      style={{ '--color': color } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

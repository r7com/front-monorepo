export type SectionHeadingProps = {
  children: React.ReactNode
  color: string
}

export function SectionHeading({ children, color = '#556373' }: SectionHeadingProps) {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap items-center gap-nano py-xxxs"
      style={{ '--color': color } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

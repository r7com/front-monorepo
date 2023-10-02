export type SectionHeadingProps = {
  children: React.ReactNode
  color: string
}

export function SectionHeading({ children, color = '#556373' }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-nano" style={{ '--color': color } as React.CSSProperties}>
      {children}
    </div>
  )
}

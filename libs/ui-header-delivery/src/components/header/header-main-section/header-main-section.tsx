export type HeaderMainSectionProps = {
  children: React.ReactNode
  bgColor?: string
}

export function HeaderMainSection({ children, bgColor = '' }: HeaderMainSectionProps) {
  return (
    <div
      className="header-flex header-justify-around header-items-center header-px-nano header-h-lg header-bg-editorial-color header-relative"
      style={{ backgroundColor: bgColor || undefined }}
    >
      {children}
    </div>
  )
}

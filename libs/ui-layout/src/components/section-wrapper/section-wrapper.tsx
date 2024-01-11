type SectionWrapperProps = {
  children: React.ReactNode
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="layout-flex layout-flex-col layout-gap-xxxs xl:layout-gap-xs">{children}</div>
  )
}

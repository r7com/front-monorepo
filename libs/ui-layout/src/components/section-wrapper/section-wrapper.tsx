type SectionWrapperProps = {
  children: React.ReactNode
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return <div className="flex flex-col gap-xxxs xl:gap-xs">{children}</div>
}

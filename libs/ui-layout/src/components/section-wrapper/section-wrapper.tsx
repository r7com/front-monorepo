type WrapperProps = {
  children: React.ReactNode
}

export function SectionWrapper({ children }: WrapperProps) {
  return <div className="flex flex-col gap-xxxs xl:gap-xs">{children}</div>
}

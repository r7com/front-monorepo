export type SectionHeadingTitleProps = {
  children: React.ReactNode
}

export function SectionHeadingTitle({ children }: SectionHeadingTitleProps) {
  return (
    <h2 className={`text-xxl font-light break-keep whitespace-nowrap text-[var(--color)]`}>
      {children}
    </h2>
  )
}

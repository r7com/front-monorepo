export type HeaderSectionProps = {
  children: React.ReactNode
}

export function HeaderSection({ children }: HeaderSectionProps) {
  return <div className="header-w-full">{children}</div>
}

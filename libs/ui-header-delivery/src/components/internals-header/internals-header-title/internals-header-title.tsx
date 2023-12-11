export type InternalsHeaderTitleProps = {
  children: React.ReactNode
}

export function InternalsHeaderTitle({ children }: InternalsHeaderTitleProps) {
  return (
    <span className="header-text-xxs header-font-medium header-overflow-x-hidden header-w-auto">
      {children}
    </span>
  )
}

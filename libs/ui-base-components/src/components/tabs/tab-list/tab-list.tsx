export type TabListProps = {
  children: React.ReactNode
  ariaLabel: string
  className?: string
}

export function TabList({ children, className = 'flex', ariaLabel }: TabListProps) {
  return (
    <div className={className} role="tablist" aria-label={ariaLabel}>
      {children}
    </div>
  )
}

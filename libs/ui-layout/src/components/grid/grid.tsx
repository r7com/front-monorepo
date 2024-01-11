type GridProps = {
  children: React.ReactNode
}

export function Grid({ children }: GridProps) {
  return (
    <div className="layout-flex layout-flex-col md:layout-grid layout-grid-cols-24 layout-gap-xxxs xl:layout-gap-xs">
      {children}
    </div>
  )
}

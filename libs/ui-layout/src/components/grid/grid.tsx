type GridProps = {
  children: React.ReactNode
}

export function Grid({ children }: GridProps) {
  return <div className="layout-grid lg:layout-grid-cols-24 layout-gap-xs">{children}</div>
}

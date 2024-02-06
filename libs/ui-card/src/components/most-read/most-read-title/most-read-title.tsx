type MostReadTitleProps = {
  children: React.ReactNode
}

export function MostReadTitle({ children }: MostReadTitleProps) {
  return <h4 className="card-text-neutral-low-500 card-font-semibold card-mb-xxxs">{children}</h4>
}

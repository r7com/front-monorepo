type MostReadFigureProps = {
  children: React.ReactNode
}

export function MostReadFigure({ children }: MostReadFigureProps) {
  return <figure className="card-block card-w-[141px] card-mt-xxxs">{children}</figure>
}

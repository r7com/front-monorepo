type MostReadListProps = {
  children: React.ReactNode
}

export function MostReadList({ children }: MostReadListProps) {
  return <ol className="card-flex card-overflow-x-auto">{children}</ol>
}

type MostReadListProps = {
  children: React.ReactNode
}

export function MostReadList({ children }: MostReadListProps) {
  return (
    <ol className="card-flex card-gap-x-xxxs card-overflow-x-auto card-overflow-y-hidden card-mt-xxxs">
      {children}
    </ol>
  )
}

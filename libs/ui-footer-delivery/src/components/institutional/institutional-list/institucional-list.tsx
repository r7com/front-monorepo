type InstitutionalListProps = {
  children: React.ReactNode
}

export function InstitutionalList({ children }: InstitutionalListProps) {
  return <ul className="flex flex-wrap">{children}</ul>
}

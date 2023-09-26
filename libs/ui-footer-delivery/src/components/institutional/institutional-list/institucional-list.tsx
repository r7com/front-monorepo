type InstitutionalListProps = {
  children: React.ReactNode
}

export function InstitutionalList({ children }: InstitutionalListProps) {
  return <ul className="flex flex-wrap justify-center lg:justify-start mt-xxxs">{children}</ul>
}

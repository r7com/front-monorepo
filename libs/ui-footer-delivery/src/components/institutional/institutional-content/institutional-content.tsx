export type InstitutionalContentProps = {
  children?: React.ReactNode
}

export function InstitutionalContent({ children }: InstitutionalContentProps) {
  return <div className="block lg:flex justify-between items-center">{children}</div>
}

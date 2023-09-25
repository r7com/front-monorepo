export type InstitutionalContentProps = {
  children?: React.ReactNode
}

export function InstitutionalContent({ children }: InstitutionalContentProps) {
  return <div className="lg:flex justify-between items-center">{children}</div>
}

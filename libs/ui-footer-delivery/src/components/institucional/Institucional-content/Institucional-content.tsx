export type InstitucionalContentProps = {
  children?: React.ReactNode
}

export function InstitucionalContent({ children }: InstitucionalContentProps) {
  return <div className="lg:flex justify-between items-center">{children}</div>
}

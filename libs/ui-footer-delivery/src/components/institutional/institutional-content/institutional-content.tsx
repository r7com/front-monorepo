export type InstitutionalContentProps = {
  children?: React.ReactNode
}

export function InstitutionalContent({ children }: InstitutionalContentProps) {
  return (
    <div className="block lg:flex justify-between pb-xxxs items-center border-t-transparent border-l-transparent border-r-transparent border-b-4 border-light-high-500 border-[1px] ">
      {children}
    </div>
  )
}

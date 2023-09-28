type InstitutionalCopyrightProps = {
  children: React.ReactNode
}

export function InstitutionalCopyright({ children }: InstitutionalCopyrightProps) {
  return (
    <p className="text-light-high-400 text-little text-center lg:text-left mt-xxxs lg:mt-auto">
      {children}
    </p>
  )
}

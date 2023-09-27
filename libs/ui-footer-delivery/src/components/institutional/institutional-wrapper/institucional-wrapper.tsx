export type InstitutionalWrapperProps = {
  children: React.ReactNode
}

export function InstitutionalWrapper({ children }: InstitutionalWrapperProps) {
  return (
    <div className="flex justify-center">
      <a href="https://www.r7.com" className="flex items-end text-light-high-400">
        {children}
      </a>
    </div>
  )
}

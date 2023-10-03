export type CardHatWrapperProps = {
  children: React.ReactNode
}

export function CardHatWrapper({ children }: CardHatWrapperProps) {
  return <div className="flex items-center mb-nano">{children}</div>
}

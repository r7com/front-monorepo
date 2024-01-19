export const GuerraOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full card-bg-neutral-low-600 md:card-bg-transparent md:card-absolute card-bottom-0 card-p-xxxs">
      {children}
    </div>
  )
}

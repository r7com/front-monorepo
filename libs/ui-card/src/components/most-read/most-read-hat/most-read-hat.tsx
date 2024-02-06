type MostReadHatProps = {
  children: React.ReactNode
}

export function MostReadHat({ children }: MostReadHatProps) {
  return (
    <p className="card-text-little card-font-normal card-uppercase card-text-[#606060] card-mb-nano">
      {children}
    </p>
  )
}

type MostReadTitleProps = {
  children: React.ReactNode
}

export function MostReadTitle({ children }: MostReadTitleProps) {
  return (
    <p className="card-text-little card-font-normal card-uppercase card-text-[#606060] card-mb-nano">
      {children}
    </p>
  )
}

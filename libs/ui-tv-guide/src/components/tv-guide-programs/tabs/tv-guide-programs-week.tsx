type TvGuideProgramsWeekProps = {
  children: React.ReactNode
}

export function TvGuideProgramsWeek({ children }: TvGuideProgramsWeekProps) {
  return (
    <ol className="tv-flex tv-overflow-x-auto tv-border-t-[3px] tv-border-t-neutral-high-600">
      {children}
    </ol>
  )
}

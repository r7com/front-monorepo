export const GuerraOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card-w-full card-bg-neutral-low-600 md:card-bg-transparent card-bottom-0 card-p-xxxs card-z-5 card-relative md:card-min-h-[528px] lg:card-absolute lg:card-min-h-[auto] md:card-flex md:card-flex-col md:card-items-start md:card-justify-end">
      {children}
    </div>
  )
}

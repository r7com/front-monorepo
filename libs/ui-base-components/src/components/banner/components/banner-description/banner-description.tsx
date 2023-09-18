export type BannerDescriptionProps = {
  children: React.ReactNode
}

export function BannerDescription({ children }: BannerDescriptionProps) {
  return (
    <div role="alert" className="text-xxs text-dark-low-400 dark:text-light-high-400">
      {children}
    </div>
  )
}

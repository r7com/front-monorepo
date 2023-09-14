export type BannerDescriptionProps = {
  children: React.ReactNode
}

export function BannerDescription({ children }: BannerDescriptionProps) {
  return <div className="text-light-high-400 dark:text-dark-low-400">{children}</div>
}

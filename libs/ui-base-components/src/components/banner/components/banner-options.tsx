export type BannerOptionsProps = {
  children: React.ReactNode
}

export function BannerOptions({ children }: BannerOptionsProps) {
  return <div className="flex gap-xxxs p-xxxs shrink-0 ml-auto">{children}</div>
}

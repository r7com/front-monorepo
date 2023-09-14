export type BannerOptionsProps = {
  children: React.ReactNode
}

export function BannerOptions({ children }: BannerOptionsProps) {
  return (
    <div className="flex h-full items-center p-xxxs ml-auto">
      <div className="flex items-center gap-xxxs h-fit shrink-0">{children}</div>
    </div>
  )
}

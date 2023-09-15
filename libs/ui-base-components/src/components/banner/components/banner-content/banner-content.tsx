import React from 'react'

export type BannerContentProps = {
  children: React.ReactNode
}

export function BannerContent({ children }: BannerContentProps) {
  return <div className="flex gap-xxs items-center w-full">{children}</div>
}

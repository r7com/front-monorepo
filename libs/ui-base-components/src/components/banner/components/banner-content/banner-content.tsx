import React from 'react'

export type BannerContentProps = {
  children: React.ReactNode
}

export function BannerContent({ children }: BannerContentProps) {
  return (
    <div className="flex flex-1 flex-col md:h-[70px] sm:flex-row gap-xxxs items-center w-full">
      {children}
    </div>
  )
}

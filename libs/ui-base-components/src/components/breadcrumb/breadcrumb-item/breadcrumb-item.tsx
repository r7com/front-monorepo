import { ReactNode } from 'react'

export type BreadcrumbItemProps = {
  children: ReactNode
}

export function BreadcrumbItem({ children }: BreadcrumbItemProps) {
  return (
    <li
      className="base-hidden base-text-little base-text-[#969da8] base-font-normal 
        last:base-flex first:base-flex md:base-flex after:base-border-t-hairline
        after:base-content-[' '] after:base-w-[6px] after:base-h-[6px] after:base-rotate-45
        after:base-cursor-pointer after:base-block base-items-center base-capitalize
        after:base-border-r-hairline after:base-border-r-agerating-18anos-500 
      after:base-border-t-agerating-18anos-500 after:base-border-solid 
        after:base-mx-nano last:after:base-content-none
        last:base-font-bold last:base-text-neutral-low-500"
    >
      {children}
    </li>
  )
}

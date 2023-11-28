import { ReactNode } from 'react'
import { DropdownProvider } from './utils/provider/dropdown-provider'

type SitemapFooterMenuItemProps = {
  children: ReactNode
}

export function SitemapFooterMenuItem({ children }: SitemapFooterMenuItemProps) {
  return (
    <li className="footer-flex footer-flex-col footer-py-xxxs md:footer-p-xxxs footer-border-b-neutral-low-400 footer-border-b-hairline footer-border-opacity-light md:footer-border-none">
      <DropdownProvider>{children}</DropdownProvider>
    </li>
  )
}

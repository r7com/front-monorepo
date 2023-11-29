import { variants } from './sitemap-footer.variants'
import { useDropdown } from './utils/hooks/use-dropdown'

type SitemapFooterSubmenuProps = {
  id: string
  children: React.ReactNode
}

export function SitemapFooterSubmenu({ id, children }: SitemapFooterSubmenuProps) {
  const { isOpen } = useDropdown()
  const { dropdownContainerSlot } = variants({ isDropdownOpen: isOpen })

  return (
    <ul id={`${id}-container`} aria-labelledby={id} className={dropdownContainerSlot()}>
      {children}
    </ul>
  )
}

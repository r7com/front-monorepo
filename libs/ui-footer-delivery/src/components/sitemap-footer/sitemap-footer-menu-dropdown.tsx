import { SvgIcon } from '@r7/ui-base-components'
import { variants } from './sitemap-footer.variants'
import { useDropdown } from './utils/hooks/use-dropdown'

type SitemapFooterMenuDropdown = {
  id: string
  children: React.ReactNode
} & React.LabelHTMLAttributes<HTMLLabelElement>

export function SitemapFooterDropdown({ id, children }: SitemapFooterMenuDropdown) {
  const { isOpen, toggle } = useDropdown()
  const { dropdownIconSlot } = variants({ isDropdownOpen: isOpen })

  const handleToggleDropdown = () => toggle()

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      className="footer-flex footer-w-full footer-justify-between"
      aria-controls={`${id}-container`}
      id={id}
      onClick={handleToggleDropdown}
    >
      {children}
      <SvgIcon iconName="chevron-bottom" className={dropdownIconSlot()} />
    </button>
  )
}

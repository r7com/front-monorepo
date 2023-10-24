import { useHeaderActions } from '../utils/hooks/use-header-actions'
import { SvgIcon } from '@r7/ui-base-components'

export function HeaderSearchToggle() {
  const { header } = useHeaderActions()

  const toggleHeaderSearch = () => header.toggle(!header.isSearchActive)

  return (
    <button
      type="button"
      className="hidden sm:flex items-center justify-center w-lg h-full bg-neutral-high-400/light"
      aria-controls="header-search-form"
      aria-expanded={header.isSearchActive}
      aria-label="Alternador de busca"
      onClick={toggleHeaderSearch}
    >
      <SvgIcon iconName="search" size="medium" className="fill-neutral-high-500" />
    </button>
  )
}

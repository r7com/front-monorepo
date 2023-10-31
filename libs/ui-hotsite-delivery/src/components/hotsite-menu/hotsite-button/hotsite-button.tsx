import { useHotsiteActions } from '../utils/hooks/use-hotsite-actions'
import { SvgIcon } from '@r7/ui-base-components'

export type HotsiteButtonProps = {
  children: React.ReactNode
  id: string
}

export function HotsiteButton({ children, id }: HotsiteButtonProps) {
  const hotsite = useHotsiteActions()

  const toggleSubmenu = () => {
    if (id !== hotsite.currentActive) hotsite.show(id)
    else hotsite.hide()
  }

  return (
    <button
      type="button"
      onMouseEnter={toggleSubmenu}
      onClick={toggleSubmenu}
      aria-expanded={id === hotsite.currentActive}
      className="flex uppercase items-center gap-quark h-full hover:text-[var(--section-color)]"
    >
      {children}
      <SvgIcon iconName="chevron-bottom" className="fill-neutral-high-600" width={13} height={13} />
    </button>
  )
}

import { useHotsiteActions } from '../utils/hooks/use-hotsite-actions'

export type HotsiteItemProps = {
  children: React.ReactNode
}

export function HotsiteItem({ children }: HotsiteItemProps) {
  const hotsite = useHotsiteActions()

  return (
    <li
      onMouseLeave={hotsite.hide}
      className="h-lg flex items-center transition-colors relative tracking-wide font-semibold sm:font-normal whitespace-nowrap text-dark-high-600 sm:text-neutral-low-600 text-xxxs sm:text-xxs border-b-[3px] border-transparent hover:border-[var(--section-color)]"
    >
      {children}
    </li>
  )
}

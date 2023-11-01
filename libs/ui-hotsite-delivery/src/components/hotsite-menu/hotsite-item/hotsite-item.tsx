import { useHotsiteActions } from '../utils/hooks/use-hotsite-actions'

export type HotsiteItemProps = {
  children: React.ReactNode
}

export function HotsiteItem({ children }: HotsiteItemProps) {
  const hotsite = useHotsiteActions()

  return (
    <li
      onMouseLeave={hotsite.hide}
      className="h-lg flex items-center transition-colors relative font-medium whitespace-nowrap text-light-low-400 text-xxs border-b-thin border-transparent hover:border-[var(--section-color)]"
    >
      {children}
    </li>
  )
}

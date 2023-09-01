import { SvgIcon } from '../svg-icon'
export type TabsProps = {
  size?: 'small' | 'medium' | 'large'
  startIcon?: React.ReactNode | null
  endIcon?: React.ReactNode | null
}

export function Tab({ size = 'medium' }: TabsProps) {
  return (
    <button
      type="button"
      className="flex text-light-low-400 p-nano gap-nano items-center border-b-thin border-transparent hover:text-brand-primary-600 group transition-colors active:border-b-brand-primary-500 active:text-light-low-400 active:outline-none active:drop-shadow-none focus-visible:drop-shadow-glow focus-visible:outline-none focus-visible:text-brand-primary-500 focus-visible:border-b-brand-primary-500"
    >
      <SvgIcon
        size="medium"
        className="fill-light-low-400 group-active:fill-light-low-400  group-hover:fill-brand-primary-600 group-focus-visible:fill-brand-primary-500"
        iconName="clock"
      />
      Sou o tab
      <SvgIcon
        size="medium"
        className="fill-light-low-400 group-active:fill-light-low-400 group-hover:fill-brand-primary-600 group-focus-visible:fill-brand-primary-500"
        iconName="chevron-bottom"
      />
    </button>
  )
}

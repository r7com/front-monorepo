import { SvgIcon } from '../svg-icon'

export type ToggleProps = {
  status?: boolean
  size?: string
  enabled?: boolean
  children?: React.ReactNode
}

export function Toggle({ status, size, enabled, children }: ToggleProps) {
  return (
    <label className="relative flex items-center p-2 text-xl">
      <input
        type="checkbox"
        className="absolute -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      />
      <span className="w-xxxl h-sm flex items-center flex-shrink-0 p-1 bg-brand-primary-500 rounded-pill p-quark duration-300 ease-in-out peer-checked:bg-highlight-400 after:w-xs after:h-xs after:bg-light-high-500 after:rounded-circular after:shadow-md after:duration-300 peer-checked:after:translate-x-sm"></span>
    </label>
  )
}

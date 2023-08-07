import { useState } from 'react'
import { SvgIcon } from '../svg-icon'

export type ToggleProps = {
  checked?: boolean
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  children?: React.ReactNode
}

export function Toggle({ checked, size = 'large', disabled = false, children }: ToggleProps) {
  const defaultChecked = checked ? checked : false

  const [isChecked, setIsChecked] = useState(defaultChecked)
  const handleToggle = () => setIsChecked(!isChecked)

  const sizeVariant = {
    large: 'w-xxxl h-sm after:w-xs after:h-xs peer-checked:after:translate-x-sm',
    medium: 'w-xl h-xs after:w-xxs after:h-xxs peer-checked:after:translate-x-xs',
    small: 'w-md h-xxs after:w-xxxs after:h-xxxs peer-checked:after:translate-x-xxs',
  }[size]

  const enabledVariant = disabled
    ? 'bg-dark-high-600 peer-checked:bg-dark-high-600 after:bg-dark-high-500'
    : 'bg-dark-high-500 peer-checked:bg-brand-primary-500  after:bg-light-high-500'

  const hoverState = disabled
    ? ''
    : 'group-hover:bg-dark-high-600 group-hover:peer-checked:bg-brand-primary-600'

  const pressedState = disabled
    ? ''
    : 'group-active:shadow-neutral-low-600 group-active:shadow-inner group-active:peer-checked:shadow-neutral-low-600 group-active:peer-checked:shadow-inner'

  const focusState = disabled
    ? ''
    : 'shadow-drop peer-focus:outline peer-focus:outline-1 peer-focus:outline-light-high-500 peer-focus:shadow-neutral-low-400 peer-checked:peer-focus:shadow-brand-primary-500 '

  return (
    <label className="relative flex items-center group p-2 text-xl m-quark">
      <input
        onChange={handleToggle}
        checked={isChecked}
        type="checkbox"
        className="absolute -translate-x-1/2 w-full h-full peer appearance-none rounded-md focus:outline-none cursor-pointer"
        disabled={disabled}
      />
      <span
        className={`flex items-center flex-shrink-0 p-1 rounded-pill p-quark ease-in-out after:rounded-circular after:duration-300 ${sizeVariant} ${enabledVariant} ${hoverState} ${pressedState} ${focusState}`.trim()}
      ></span>
    </label>
  )
}

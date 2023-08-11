import { useEffect, useState } from 'react'
import { SvgIcon } from '../svg-icon'

export type ToggleProps = {
  checked?: boolean
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  icon?: boolean
}

export function Toggle({
  checked = false,
  size = 'large',
  disabled = false,
  icon = true,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked)
  const handleToggle = () => {
    setIsChecked(prev => !prev)
  }

  const sizeVariant = {
    large: {
      toggle: 'w-xxxl h-sm',
      dot: 'after:w-xs after:h-xs peer-checked:after:translate-x-sm',
    },
    medium: {
      toggle: 'w-xl h-xs',
      dot: 'after:w-xxs after:h-xxs peer-checked:after:translate-x-xs',
    },
    small: {
      toggle: 'w-md h-xxs after:w-xxxs',
      dot: 'after:h-xxxs peer-checked:after:translate-x-xxs',
    },
  }[size]

  const iconSizeVariant = {
    large: {
      check: 'w-xxs h-xxs',
      error: 'w-xxxs h-xxxs right-quark',
    },
    medium: {
      check: 'w-xxxs h-xxxs',
      error: 'w-xxxs h-xxxs right-0',
    },
    small: {
      check: 'w-nano w h-nano',
      error: 'w-nano h-nano right-0',
    },
  }[size]

  const enabledVariant = {
    toggle: disabled
      ? 'bg-dark-high-600 peer-checked:bg-dark-high-600 after:bg-dark-high-500'
      : 'bg-dark-high-500 peer-checked:bg-brand-primary-500  after:bg-light-high-500',
    icon: disabled ? 'fill-dark-high-500' : 'fill-light-high-500',
  }

  const iconVariant = icon ? (
    <div className={`absolute flex items-center ${sizeVariant.toggle}`}>
      <SvgIcon
        iconName="check"
        className={`${iconSizeVariant.check} ${enabledVariant.icon} min-w-max min-h-max m-nano`}
      />
      <SvgIcon
        iconName="error"
        className={`${iconSizeVariant.error} ${enabledVariant.icon} absolute min-w-max min-h-max m-nano`}
      />
    </div>
  ) : (
    ''
  )

  const hoverState = disabled
    ? ''
    : 'group-hover:bg-dark-high-600 group-hover:peer-checked:bg-brand-primary-600'

  const pressedState = disabled
    ? ''
    : 'group-active:shadow-neutral-low-600 group-active:shadow-inner group-active:peer-checked:shadow-neutral-low-600 group-active:peer-checked:shadow-inner'

  const focusState = disabled
    ? ''
    : 'shadow-drop peer-focus:outline peer-focus:outline-1 peer-focus:outline-light-high-500 peer-focus:shadow-neutral-low-400 peer-checked:peer-focus:shadow-brand-primary-500'

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <label className="relative flex items-center group p-2 text-xl m-quark">
      <input
        onChange={handleToggle}
        checked={isChecked}
        type="checkbox"
        className="absolute -translate-x-1/2 w-full h-full peer appearance-none rounded-md focus:outline-none cursor-pointer"
        disabled={disabled}
        aria-hidden="true"
      />
      <span
        role="checkbox"
        aria-checked={isChecked}
        className={`flex items-center flex-shrink-0 p-1 rounded-pill p-quark ease-in-out after:rounded-circular after:duration-300 ${sizeVariant.toggle} ${sizeVariant.dot} ${enabledVariant.toggle} ${hoverState} ${pressedState} ${focusState}`.trim()}
      ></span>
      {iconVariant}
    </label>
  )
}

import { ChangeEventHandler } from 'react'
import { SvgIcon } from '../svg-icon'
import { ToggleVariants, variants } from './toggle.variants'

export type ToggleProps = {
  checked?: boolean
  disableIcon?: boolean
  name: string
  onChange?: ChangeEventHandler<HTMLInputElement>
} & ToggleVariants

export function Toggle({
  size = 'large',
  disabled = false,
  disableIcon = false,
  name,
  checked,
  onChange,
}: ToggleProps) {
  const { toggle, iconsContainer, iconChecked, iconUnchecked } = variants({ size, disabled })

  const iconElements = !disableIcon && (
    <div className={iconsContainer()}>
      <SvgIcon iconName="check" className={iconChecked()} />
      <SvgIcon iconName="error" className={iconUnchecked()} />
    </div>
  )

  return (
    <label
      htmlFor={name}
      className="base-relative base-flex base-items-center base-group base-p-nano base-text-xl base-m-quark base-cursor-pointer base-w-full base-h-full"
    >
      <input
        name={name}
        id={name}
        onChange={onChange}
        type="checkbox"
        className="base-sr-only base-peer base-rounded-md focus:base-outline-none"
        disabled={disabled}
        checked={checked}
      />
      <span aria-hidden="true" className={toggle()}></span>
      {iconElements}
    </label>
  )
}

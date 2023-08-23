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
  const { toggleVariant, boxVariant, checkVariant, errorVariant } = variants({ size, disabled })

  const iconElements = !disableIcon && (
    <div className={boxVariant()}>
      <SvgIcon iconName="check" className={checkVariant()} />
      <SvgIcon iconName="error" className={errorVariant()} />
    </div>
  )

  return (
    <label
      htmlFor={name}
      className="relative flex items-center group p-2 text-xl m-quark cursor-pointer w-full h-full"
    >
      <input
        name={name}
        id={name}
        onChange={onChange}
        type="checkbox"
        className="sr-only peer rounded-md focus:outline-none"
        disabled={disabled}
        checked={checked}
      />
      <span aria-hidden="true" className={toggleVariant()}></span>
      {iconElements}
    </label>
  )
}

import { variants, SelectVariants } from './select-field.variants'

export type SelectFieldProps = {
  name: string
  label?: string
  className?: string
  placeholder: string
  options: { value: string | number; text: string }[]
} & SelectVariants &
  React.SelectHTMLAttributes<HTMLSelectElement>

export function SelectField({
  label,
  name,
  placeholder,
  options,
  className = '',
  value = undefined,
  ...rest
}: SelectFieldProps) {
  const { labelSlot, selectSlot, wrapperSlot } = variants({})

  return (
    <div className={wrapperSlot()}>
      {label && (
        <label className={labelSlot()} htmlFor={name}>
          {label}
        </label>
      )}
      <select {...rest} className={selectSlot({ className })} name={name} id={name} value={value}>
        <option value="">{placeholder}</option>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  )
}

import { variants, SelectVariants } from './select-field.variants'

export type SelectFieldProps = {
  name: string
  label?: string
  className?: string
  placeholder: string
  options: { id: string | number; name: string | number }[]
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
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

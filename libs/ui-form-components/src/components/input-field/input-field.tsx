import { variants, InputVariants } from './input-field.variants'

export type InputFieldProps = {
  name: string
  label?: string
  className?: string
  type?: 'text' | 'password' | 'email' | 'number'
} & InputVariants &
  React.InputHTMLAttributes<HTMLInputElement>

export function InputField({
  name,
  label,
  className = '',
  type = 'text',
  value = undefined,
  ...rest
}: InputFieldProps) {
  const { inputSlot, labelSlot, wrapperSlot } = variants({})

  return (
    <div className={wrapperSlot()}>
      {label && (
        <label className={labelSlot()} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        {...rest}
        className={inputSlot({ className })}
        type={type}
        name={name}
        value={value}
        id={name}
      />
    </div>
  )
}

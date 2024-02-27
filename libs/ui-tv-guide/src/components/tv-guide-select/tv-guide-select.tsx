import { selectVariants } from './variants'

type TvGuideSelectProps = {
  children: React.ReactNode
} & React.SelectHTMLAttributes<HTMLSelectElement>

type TvGuideOptionProps = {
  children: React.ReactNode
} & React.OptionHTMLAttributes<HTMLOptionElement>

export function TvGuideSelect({ children, className, ...selectProps }: TvGuideSelectProps) {
  const { selectSlot, wrapperSlot } = selectVariants()
  return (
    <div className={wrapperSlot()}>
      <select className={selectSlot({ className })} {...selectProps}>
        {children}
      </select>
    </div>
  )
}

TvGuideSelect.Option = ({ children, ...optProps }: TvGuideOptionProps) => {
  return <option {...optProps}>{children}</option>
}

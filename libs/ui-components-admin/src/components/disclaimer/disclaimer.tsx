import { SvgIcon } from '../svg-icon'

export function Disclaimer({ text }: { text: string }) {
  return (
    <div className="flex items-center p-nano  gap-nano">
      <SvgIcon iconName="disclaimer" size="medium" />
      <p className="text-xxxs font-open-sans text-dark-high-500">{text}</p>
    </div>
  )
}

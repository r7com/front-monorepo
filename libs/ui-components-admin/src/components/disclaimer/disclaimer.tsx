import { SvgIcon } from '../svg-icon'

export function Disclaimer({ text }: { text: string }) {
  return (
    <div>
      <SvgIcon iconName="disclaimer" />
      <h1 className="text-dark-high-500">{text}</h1>
    </div>
  )
}

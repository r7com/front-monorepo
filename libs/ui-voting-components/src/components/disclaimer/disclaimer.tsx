import { SvgIcon } from '@r7/ui-base-components'

export type DisclaimerProps = {
  text: string
}

export function Disclaimer({ text }: DisclaimerProps) {
  return (
    <div data-testid="disclaimer" className="flex items-center p-nano gap-nano">
      <SvgIcon iconName="circle-info" size="medium" className="fill-feedback-success-500" />
      <p className="text-xxxs font-open-sans text-dark-high-500">{text}</p>
    </div>
  )
}

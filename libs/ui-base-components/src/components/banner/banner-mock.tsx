import { type SvgIcons } from '../svg-icon'
import { BannerProps } from './banner'
import { type BannerNormalIconProps } from './components'

/** Temporariamente aqui  */
type Extract<T, U extends T> = U

/** Mocka as props do Banner no Storybook  */
export type BannerMockProps = {
  isVisible: BannerProps['isVisible']
  iconType: BannerNormalIconProps['type']
  customIconName: Extract<SvgIcons, 'record' | 'chevron-right'>
  description?: string
  imageSourceUrl?: string
}

/** Mocka uma composição de banner com as props no Storybook   */
export function BannerMock({
  iconType = 'informative',
  isVisible = true,
  customIconName = 'record',
}: BannerMockProps) {
  return (
    isVisible && (
      <div>
        {iconType}
        {customIconName}
      </div>
    )
  )
}

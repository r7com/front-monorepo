import { type SvgIcons } from '../svg-icon'
import { BannerProps } from './banner'
import type { BannerIconVariants } from './components/banner-icon/banner-icon-variants'

/** Temporariamente aqui  */
type Extract<T, U extends T> = U

/** Mocka as props do Banner no Storybook  */
export type BannerMockProps = {
  isVisible: BannerProps['isVisible']
  iconType: BannerIconVariants['type']
  iconName: Extract<
    SvgIcons,
    'bell' | 'archive' | 'circle-add' | 'info' | 'record' | 'chevron-right'
  >
  description?: string
  imageSourceUrl?: string
}

/** Mocka uma composição de banner com as props no Storybook   */
export function BannerMock({
  iconType = 'informative',
  isVisible = true,
  iconName = 'record',
}: BannerMockProps) {
  return (
    isVisible && (
      <div>
        {iconType}
        {iconName}
      </div>
    )
  )
}

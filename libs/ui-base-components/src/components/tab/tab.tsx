import { SvgIcon, SvgIconProps } from '../svg-icon'
import { SvgIcons } from '../svg-icon/svg-icon.types'
import { TabVariants, variants } from './tab.variants'

export type TabProps = {
  text: string
  selected: boolean
  id: string
  size?: 'small' | 'medium' | 'large'
  startIconName?: SvgIcons
  endIconName?: SvgIcons
} & TabVariants

export function Tab({
  text,
  selected = false,
  id,
  size = 'medium',
  startIconName,
  endIconName,
}: TabProps) {
  const { button, icon } = variants({ size, selected })

  const svgSize = {
    small: 'small',
    medium: 'medium',
    large: 'default',
  }[size]

  return (
    <button
      type="button"
      className={button()}
      role="tab"
      aria-selected={selected}
      tab-index={selected ? '0' : '-1'}
      id={id}
    >
      {startIconName && (
        <SvgIcon
          size={svgSize as SvgIconProps['size']}
          className={icon()}
          iconName={startIconName}
        />
      )}
      {text}
      {endIconName && (
        <SvgIcon size={svgSize as SvgIconProps['size']} className={icon()} iconName={endIconName} />
      )}
    </button>
  )
}

import { SvgIcon, SvgIconProps } from '../../svg-icon'
import { SvgIcons } from '../../svg-icon/svg-icon.types'
import { TabButtonVariants, variants } from './tab-button.variants'

export type TabButtonProps = {
  text: string
  id: string
  tabpanelId: string
  size?: 'small' | 'medium' | 'large'
  startIconName?: SvgIcons
  endIconName?: SvgIcons
} & TabButtonVariants

export function TabButton({
  text,
  id,
  tabpanelId,
  size = 'medium',
  startIconName,
  endIconName,
}: TabButtonProps) {
  const { button, icon } = variants({ size })
  const tabEvent = new CustomEvent('onTabClick', {
    bubbles: true,
    detail: {
      tabId: id,
    },
  })
  const svgSize = {
    small: 'small',
    medium: 'medium',
    large: 'default',
  }[size]

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLElement
    target.dispatchEvent(tabEvent)
  }

  return (
    <button
      type="button"
      className={button()}
      role="tab"
      aria-selected={false}
      tabIndex={-1}
      id={id}
      aria-controls={tabpanelId}
      onClick={handleClick}
    >
      {startIconName && (
        <SvgIcon
          size={svgSize as SvgIconProps['size']}
          className={icon()}
          iconName={startIconName}
          fill="white"
        />
      )}
      {text}
      {endIconName && (
        <SvgIcon
          size={svgSize as SvgIconProps['size']}
          className={icon()}
          iconName={endIconName}
          fill="white"
        />
      )}
    </button>
  )
}

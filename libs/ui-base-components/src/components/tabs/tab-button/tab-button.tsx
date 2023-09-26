import { SvgIcon, SvgIconProps } from '../../svg-icon'
import { SvgIcons } from '../../svg-icon/svg-icon.types'
import { useTabs } from '../tabs/hooks/use-tabs'
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
  const { currentTabId, setCurrentTabId } = useTabs()
  const svgSize = {
    small: 'small',
    medium: 'medium',
    large: 'default',
  }[size]

  function handleClick() {
    setCurrentTabId(id)
  }

  return (
    <button
      type="button"
      className={button()}
      role="tab"
      aria-selected={currentTabId === id}
      tabIndex={currentTabId === id ? 0 : -1}
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

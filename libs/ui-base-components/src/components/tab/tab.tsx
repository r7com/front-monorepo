import { useRef } from 'react'
import { SvgIcon, SvgIconProps } from '../svg-icon'
import { SvgIcons } from '../svg-icon/svg-icon.types'
import { TabVariants, variants } from './tab.variants'

export type TabProps = {
  text: string
  id: string
  tabpanelId: string
  selected?: boolean
  size?: 'small' | 'medium' | 'large'
  startIconName?: SvgIcons
  endIconName?: SvgIcons
} & TabVariants

export function Tab({
  text,
  id,
  tabpanelId,
  selected = false,
  size = 'medium',
  startIconName,
  endIconName,
}: TabProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { button, icon } = variants({ size, selected })
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
    target.ariaSelected = 'true'
    target.tabIndex = 0
    ref.current?.dispatchEvent(tabEvent)
  }

  return (
    <button
      ref={ref}
      type="button"
      className={button()}
      role="tab"
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
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

import { useCallback, useEffect } from 'react'
import { useHover } from '@uidotdev/usehooks'
import { useActiveItem } from '../hooks/use-active-item'

import { SvgIcon } from '@r7/ui-base-components'

export type MenuItemProps = {
  url: string
  id: string
  text: string
  newWindow?: boolean
  children?: React.ReactNode
}

export function MenuItem({ url, text, id, newWindow = true, children }: MenuItemProps) {
  const [ref, isMenuExpanded] = useHover<HTMLLIElement>()
  const { changeActiveMenuItem } = useActiveItem()

  const activeMenuOnInteraction = useCallback(
    () => changeActiveMenuItem(id),
    [changeActiveMenuItem, id],
  )

  useEffect(() => {
    if (isMenuExpanded) activeMenuOnInteraction()
  }, [isMenuExpanded, activeMenuOnInteraction])

  return (
    <li
      role="none"
      className="relative h-lg inline-flex mr-xxxs uppercase"
      ref={ref}
      onFocus={activeMenuOnInteraction}
    >
      <a
        className="gap-quark flex items-center text-xxxs font-normal leading-5 text-neutral-high-500 hover:text-neutral-high-400 [&:hover>svg]:rotate-180 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
        role="menuitem"
        href={url}
        aria-haspopup={Boolean(children)}
        aria-expanded={isMenuExpanded}
        target={newWindow ? '_blank' : '_self'}
        rel={newWindow ? 'noreferrer' : undefined}
      >
        {text}
        {children && <SvgIcon iconName="chevron-bottom" color="primary" width={12} height={12} />}
      </a>
      {children}
    </li>
  )
}

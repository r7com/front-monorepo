import { useState } from 'react'
import { TooltipVariants, variants } from './tooltip.variants'

export type TooltipProps = {
  content: string | React.ReactNode
  children: React.ReactNode
  className?: string
} & TooltipVariants

export function Tooltip({ content, children, className = '', position = 'top' }: TooltipProps) {
  const [isHover, setHover] = useState(false)
  const { tooltip, target, root } = variants({ position, hover: isHover, className })

  return (
    <div
      className={root()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span role="tooltip" id="tooltip" aria-hidden={!isHover} className={tooltip()}>
        {content}
      </span>
      <div className={target()} aria-describedby="tooltip">
        {children}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { TooltipVariants, variants } from './tooltip.variants'

export type TooltipProps = {
  content: string | React.ReactNode
  children: React.ReactNode
  className?: string
} & TooltipVariants

export function Tooltip({
  content,
  children,
  className = '',
  position = 'top',
  arrow = true,
}: TooltipProps) {
  const [isHover, setHover] = useState(false)

  return (
    <div className="inline relative">
      <span
        data-testid="tooltip"
        role="tooltip"
        id="tooltip"
        aria-hidden={!isHover}
        className={variants({ position, arrow, hover: isHover, className })}
      >
        {content}
      </span>
      <div
        aria-describedby="tooltip"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { TooltipVariants, variants } from './tooltip.variants'

export type TooltipProps = {
  content: string | React.ReactNode
  children: React.ReactNode
  className?: string
  margin?: 'small' | 'medium' | 'large'
} & TooltipVariants

export function Tooltip({
  content,
  children,
  className = '',
  position = 'top',
  margin,
}: TooltipProps) {
  const [isHover, setHover] = useState(false)
  const { tooltip, target } = variants({ position, hover: isHover, margin, className })

  return (
    <div className="inline-block relative">
      <span
        role="tooltip"
        id="tooltip"
        aria-hidden={!isHover}
        className={tooltip()}
        onMouseEnter={() => {
          console.log('SPAN')
          setHover(true)
        }}
        onMouseLeave={() => setHover(false)}
      >
        {content}
      </span>
      <div
        className={target()}
        aria-describedby="tooltip"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </div>
    </div>
  )
}

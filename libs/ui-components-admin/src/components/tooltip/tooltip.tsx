import { useState } from 'react'
import { TooltipVariants, variants } from './tooltip.variants'

export type TooltipProps = {
  content: string | React.ReactNode
  children: React.ReactNode
  className?: string
  marginArrow?:
    | 'quark'
    | 'nano'
    | 'xxxs'
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'huge'
    | 'giant'
} & TooltipVariants

export function Tooltip({
  content,
  children,
  className = '',
  position = 'top',
  marginArrow = 'nano',
  arrow = true,
}: TooltipProps) {
  const [isHover, setHover] = useState(false)
  const firstCharacter = position.charAt(0)
  const arrowPosition = `m${firstCharacter}-${marginArrow}`

  return (
    <div className="inline-block relative">
      <span
        role="tooltip"
        id="tooltip"
        aria-hidden={!isHover}
        className={variants({ position, arrow, hover: isHover, className })}
        onMouseEnter={() => {
          console.log('SPAN')
          setHover(true)
        }}
      >
        {content}
      </span>
      <div
        className={`inline-block ${arrowPosition}`}
        aria-describedby="tooltip"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </div>
    </div>
  )
}

import { useState } from 'react'

export type TooltipProps<C extends React.ElementType> = {
  content: string | React.ReactNode
  children: React.ReactNode
  position?: 'right' | 'left' | 'bottom' | 'top'
  className?: string
  arrow?: boolean
} & React.ComponentPropsWithoutRef<C>

export function Tooltip<C extends React.ElementType>({
  content,
  children,
  position = 'top',
  className = '',
  arrow = true,
}: TooltipProps<C>) {
  const [isHover, setHover] = useState(false)

  const variant = {
    top: 'left-1/2 -translate-y-[calc(100%_+_5px)] -translate-x-1/2 after:border-[5px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[5px] after:border-t-solid after:border-t-neutral-low-600 after:left-1/2 after:top-full after:-translate-x-1/2',
    right:
      '-right-[5px] top-1/2 translate-x-[100%] -translate-y-1/2 after:border-[5px] after:border-solid after:border-transparent after:border-l-[0px] after:border-r-[5px] after:border-r-solid after:border-r-neutral-low-600 after:top-1/2 after:left-[1px] after:-translate-x-full after:-translate-y-1/2',
    left: 'after:right-0 after:border-[5px] after:border-solid after:border-transparent after:left-1/2 after:border-r-[0px] after:border-l-[5px] after:border-l-neutral-low-600 right-[calc(100%_+_5px)] top-1/2 -translate-y-1/2 after:translate-x-full after:-translate-y-1/2 after:top-1/2',
    bottom:
      'top-[calc(100%_+_5px)] translate-y-0 translate-x-1/2 right-1/2 after:border-[5px] after:border-solid after:border-transparent after:border-t-[0px] after:border-b-[5px] after:border-b-solid after:border-b-neutral-low-600 after:left-1/2 after:bottom-full after:-translate-x-1/2',
  }[position]

  const compiledClasses = [
    variant,
    arrow ? "after:content-[''] after:block after:absolute" : '',
    className,
  ]
    .join(' ')
    .trim()

  return (
    <div className="inline relative">
      <span
        data-testid="tooltip"
        role="tooltip"
        id="tooltip"
        aria-hidden={!isHover}
        className={`bg-dark-low-400 w-max ${
          isHover ? 'visible z-10' : 'invisible -z-10'
        } rounded-md transition-all ease-out duration-300 text-neutral-high-400 absolute px-xxxs py-xxs ${compiledClasses}`}
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

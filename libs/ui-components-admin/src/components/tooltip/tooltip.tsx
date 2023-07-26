export type TooltipProps<C extends React.ElementType> = {
  content: string | React.ReactNode
  children: React.ReactNode
  position?: 'right' | 'left' | 'bottom' | 'top'
} & React.ComponentPropsWithoutRef<C>

export function Tooltip<C extends React.ElementType>({
  content,
  children,
  position = 'top',
}: TooltipProps<C>) {
  const baseArrow = "after:transform after:block after:absolute after:content-['']"
  const variant = {
    top: 'left-1/2 -translate-y-[110%] -translate-x-1/2 mb-xxxs ----- after:border-[15px] after:border-solid after:border-transparent after:border-b-[0px] after:border-t-[15px] after:border-t-solid after:border-t-neutral-low-600 ---- after:left-1/2 after:top-full after:-translate-x-1/2',
    right:
      '-right-[15px] top-1/2 translate-x-[100%] -translate-y-1/2 ---  after:border-[15px] after:border-solid after:border-transparent after:border-l-[0px] after:border-r-[15px] after:border-r-solid after:border-r-neutral-low-600 ---- after:top-1/2 after:left-0 after:-translate-x-full after:-translate-y-1/2',
    left: 'after:right-[1px] after:border-[15px] after:border-solid after:border-transparent after:left-1/2 after:border-r-[0px] after:border-l-[15px] after:border-l-neutral-low-600 right-full mr-xxxs top-1/2 -translate-y-1/2 after:translate-x-full after:-translate-y-1/2 after:top-1/2',
    bottom: '',
  }[position]

  return (
    <div className="group inline relative">
      <div
        className={`bg-dark-low-400 hidden w-max group-hover:inline-block text-neutral-high-400 rounded-md absolute px-xxxs py-xxs ${baseArrow} ${variant}`}
      >
        {content}
      </div>
      {children}
    </div>
  )
}

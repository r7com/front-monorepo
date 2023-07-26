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
  const baseArrow = "after:transform after:block after:absolute after:content-[''] after:left-1/2"
  const variant = {
    top: '',
    right: '',
    left: 'after:right-0 after:border-[15px] after:border-solid after:border-transparent after:border-r-[0px] after:border-l-[15px] after:border-l-neutral-low-600 right-full mr-xxxs top-1/2 -translate-y-1/2 after:translate-x-full after:-translate-y-1/2 after:top-1/2',
    bottom: '',
  }[position]

  return (
    <div className="group inline relative">
      <div
        className={`bg-dark-low-400 group-hover:inline-block text-neutral-high-400 rounded-md absolute px-nano py-xxxs ${baseArrow} ${variant}`}
      >
        {content}
      </div>
      {children}
    </div>
  )
}

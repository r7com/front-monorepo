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
  const variant = {
    top: '',
    right: '',
    left: "after:rotate-45 after:transform after:inline-block after:-ml-[5px] after:absolute after:content-[''] after:border-transparent after:top-full after:left-1/2 after:border-solid after:border-[10px] after:border-t-neutral-high-600",
    bottom: '',
  }[position]

  return (
    <div className="group inline relative">
      <div
        className={`bg-dark-low-400 group-hover:inline-block text-neutral-high-400 rounded-md absolute px-nano py-xxxs ${variant}`}
      >
        {content}
      </div>
      {children}
    </div>
  )
}

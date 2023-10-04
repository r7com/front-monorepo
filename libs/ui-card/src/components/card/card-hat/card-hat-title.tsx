export type CardHatTitleProps = {
  children: React.ReactNode
}

export function CardHatTitle({ children }: CardHatTitleProps) {
  return (
    <p className="text-xxxs font-open-sans text-neutral-low-400 dark:text-neutral-high-400 uppercase">
      {children}
    </p>
  )
}

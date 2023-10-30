export type SocialListProps = {
  children: React.ReactNode
}

export function SocialList({ children }: SocialListProps) {
  return <ul className="flex items-center gap-xxxs sm:gap-nano">{children}</ul>
}

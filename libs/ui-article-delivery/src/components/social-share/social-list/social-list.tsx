export type SocialListProps = {
  children: React.ReactNode
}

export function SocialList({ children }: SocialListProps) {
  return (
    <ul className="article-flex article-items-center article-gap-xxxs sm:article-gap-nano">
      {children}
    </ul>
  )
}

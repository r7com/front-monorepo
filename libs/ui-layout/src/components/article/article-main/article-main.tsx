type ArticleMainProps = {
  children: React.ReactNode
}

export function ArticleMain({ children }: ArticleMainProps) {
  return (
    <main className="md:layout-col-span-24 lg:layout-col-span-17 layout-grid layout-gap-xxs">
      {children}
    </main>
  )
}

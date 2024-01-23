import { FiveVerticalNewsItemContext } from './context'

export function FiveVerticalNewsItemProvider({
  isMain,
  children,
}: {
  isMain: boolean
  children: React.ReactNode
}) {
  return (
    <FiveVerticalNewsItemContext.Provider value={{ isMain }}>
      {children}
    </FiveVerticalNewsItemContext.Provider>
  )
}

import { createContext } from 'react'

type FiveVerticalNewsItemProps = {
  isMain: boolean
}

export const FiveVerticalNewsItemContext = createContext<FiveVerticalNewsItemProps | null>(null)

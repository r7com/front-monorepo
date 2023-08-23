import { createContext } from 'react'
import { SnackbarProps } from '../snackbar'

export type NotificationMessage = {
  key?: number
} & SnackbarProps

export const NotificationContext = createContext<{
  addMessage(opts: NotificationMessage): void
}>(null as never)

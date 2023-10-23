import { createContext } from 'react'
import { SnackbarProps } from '../snackbar'

export type NotificationMessage = SnackbarProps

export const NotificationContext = createContext<{
  addMessage(opts: NotificationMessage): void
}>(null as never)

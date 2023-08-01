import { createContext } from 'react'
import { SnackbarProps } from '../snackbar'

type NotificationContextProps = {
  addNotification: (content: SnackbarProps) => void
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined)

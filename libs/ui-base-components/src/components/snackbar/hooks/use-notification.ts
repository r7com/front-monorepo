import { useContext } from 'react'
import { NotificationContext, NotificationMessage } from '../contexts/notification-context'

type DefaultMessage = Omit<NotificationMessage, 'open'>

export function useNotification() {
  const { addMessage } = useContext(NotificationContext)

  const notify = (opts: DefaultMessage) => {
    addMessage({ ...opts })
  }

  return notify
}

import { useContext } from 'react'
import { NotificationContext, NotificationMessage } from '../contexts/notification-context'
import { v4 as uuidv4 } from 'uuid'

type DefaultMessage = Omit<NotificationMessage, 'onExit' | 'key' | 'open'>

type TypedMessage = Omit<DefaultMessage, 'type'>

export function useNotification() {
  const { addMessage } = useContext(NotificationContext)

  const addNotification = (opts: DefaultMessage) => {
    const key = uuidv4()
    addMessage({ ...opts, key })
  }

  const informativeNotification = (opts: TypedMessage) => {
    addNotification({ ...opts, type: 'informative' })
  }

  const positiveNotification = (opts: TypedMessage) => {
    addNotification({ ...opts, type: 'positive' })
  }

  const alertNotification = (opts: TypedMessage) => {
    addNotification({ ...opts, type: 'alert' })
  }

  const errorNotification = (opts: TypedMessage) => {
    addNotification({ ...opts, type: 'error' })
  }

  return {
    informativeNotification,
    positiveNotification,
    alertNotification,
    errorNotification,
  }
}

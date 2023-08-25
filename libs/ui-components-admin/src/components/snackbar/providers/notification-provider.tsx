import { useState } from 'react'
import { NotificationContext, NotificationMessage } from '../contexts/notification-context'
import { Snackbar } from '../snackbar'

export type NotificationProviderProps = {
  children: React.ReactNode
}

const initialValue = { current: null as never, queue: [] }

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [{ current, queue }, setMessages] = useState<{
    current: NotificationMessage
    queue: NotificationMessage[]
  }>(initialValue)

  const addMessage = (message: NotificationMessage) => {
    if (current) setMessages(() => ({ current, queue: queue.concat({ ...message, open: true }) }))
    else {
      setMessages({ queue, current: message })
      setTimeout(() => {
        setMessages(oldMessages => ({
          ...oldMessages,
          current: { ...oldMessages.current, open: true },
        }))
      }, 100)
    }
  }

  const removeMessage = () => {
    setMessages({ queue, current: { ...current, open: false } })
    setTimeout(() => {
      if (queue.length) setMessages({ current: queue[0], queue: queue.slice(1) })
      else setMessages(initialValue)
    }, 100)
  }

  return (
    <NotificationContext.Provider value={{ addMessage }}>
      {children}
      {current && (
        <Snackbar
          {...current}
          onDismiss={() => {
            removeMessage()
            current?.onDismiss && current.onDismiss()
          }}
        />
      )}
    </NotificationContext.Provider>
  )
}

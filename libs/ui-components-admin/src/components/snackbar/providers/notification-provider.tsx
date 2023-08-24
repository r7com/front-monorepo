import { useState } from 'react'
import { NotificationContext, NotificationMessage } from '../contexts/notification-context'
import { Snackbar } from '../snackbar'

export type NotificationProviderProps = {
  children: React.ReactNode
}

export function NotificationProvider({ children }: NotificationProviderProps) {
  const [{ current, queue }, setMessages] = useState<{
    current: NotificationMessage
    queue: NotificationMessage[]
  }>({ current: null as never, queue: [] })

  const addMessage = (message: NotificationMessage) => {
    const newMessage = { ...message, open: true }

    if (current) setMessages(() => ({ current, queue: queue.concat(newMessage) }))
    else setMessages({ queue, current: newMessage })
  }

  const removeMessage = () => {
    setMessages({ queue, current: { ...current, open: false } })
    setTimeout(() => {
      setMessages({ current: queue[0], queue: queue.slice(1) })
    }, 200)
  }

  return (
    <NotificationContext.Provider value={{ addMessage }}>
      {children}
      <Snackbar
        {...current}
        onDismiss={() => {
          removeMessage()
          current?.onDismiss && current.onDismiss()
        }}
      />
    </NotificationContext.Provider>
  )
}

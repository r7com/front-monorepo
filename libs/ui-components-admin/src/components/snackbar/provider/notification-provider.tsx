import { useEffect, useMemo, useState, useCallback } from 'react'
import { NotificationContext } from '../context/notification-context'
import { Snackbar, SnackbarProps } from '../snackbar'
import { v4 as uuidv4 } from 'uuid'

const AUTO_DISMISS = 5000

type SnackbarProviderProps = {
  children: React.ReactNode
}

export function NotificationProvider({ children }: SnackbarProviderProps) {
  type AlertProps = SnackbarProps & { id: string }
  const [alerts, setAlerts] = useState<AlertProps[]>([])

  const activeAlertIds = alerts.join(',')

  useEffect(() => {
    if (activeAlertIds.length > 0) {
      const timer = setTimeout(
        () => setAlerts(alerts => alerts.slice(0, alerts.length - 1)),
        AUTO_DISMISS,
      )
      return () => clearTimeout(timer)
    }
  }, [activeAlertIds])

  const addNotification = useCallback(
    (content: SnackbarProps) => setAlerts(alerts => [{ ...content, id: uuidv4() }, ...alerts]),
    [],
  )

  const onDismiss = (id: string) => {
    const newAlerts = alerts.filter(alert => alert.id !== id)
    setAlerts(newAlerts)
  }

  const value = useMemo(() => ({ addNotification }), [addNotification])

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {alerts.map(alert => (
        <Snackbar key={alert.id} {...alert} onDismiss={() => onDismiss(alert.id)} />
      ))}
    </NotificationContext.Provider>
  )
}

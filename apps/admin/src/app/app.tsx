import { Button, useNotifications } from '@r7-front-monorepo/ui-components-admin'
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Voting = React.lazy(() => import('voting/Module'))

export function App() {
  const notifications = useNotifications()

  return (
    <React.Suspense fallback={null}>
      <Button
        onClick={() => {
          notifications?.addNotification({
            message: 'mensagem custom',
            type: 'alert',
            position: 'bottom-left',
          })
          notifications?.addNotification({
            message: 'mensagem custom',
            type: 'success',
            position: 'bottom-right',
          })
          notifications?.addNotification({
            message: 'mensagem custom',
            type: 'default',
            position: 'top-left',
          })
          notifications?.addNotification({
            message: 'top-right',
            type: 'warning',
            position: 'top-right',
          })
        }}
      >
        click 1
      </Button>

      <header>
        <ul>
          <li>
            <Link className="no-underline" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/voting">Voting</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<h1>Hello Dashboard</h1>} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </React.Suspense>
  )
}

export default App

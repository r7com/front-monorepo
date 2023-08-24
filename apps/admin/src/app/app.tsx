import { Button, useNotification } from '@r7-front-monorepo/ui-components-admin'
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Voting = React.lazy(() => import('voting/Module'))

export function App() {
  const notify = useNotification()

  return (
    <React.Suspense fallback={null}>
      <Button
        onClick={() =>
          notify.informativeNotification({
            message: 'mensagem informativa',
            onDismiss: () => console.log('run on notification dismiss'),
          })
        }
      >
        informative notification
      </Button>

      <Button
        onClick={() =>
          notify.positiveNotification({ message: 'mensagem de sucesso', dismissTimeout: 2000 })
        }
      >
        positive notification
      </Button>

      <Button
        onClick={() =>
          notify.alertNotification({
            message: 'mensagem de alerta',
            action: <Button>click</Button>,
          })
        }
      >
        alert notification
      </Button>

      <Button onClick={() => notify.errorNotification({ message: 'mensagem de erro' })}>
        error notification
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

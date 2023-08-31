import {
  Button,
  CardStatus,
  SvgIcon,
  useNotification,
} from '@r7-front-monorepo/ui-components-admin'
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Voting = React.lazy(() => import('voting/Module'))

export function App() {
  const notify = useNotification()

  return (
    <React.Suspense fallback={null}>
      <CardStatus text="teste" variant="success" />
      <Button startIcon={<SvgIcon iconName="archive" />} endIcon={<SvgIcon iconName="archive" />}>
        click
      </Button>
      <Button
        onClick={() =>
          notify({
            type: 'informative',
            message: 'mensagem informativa',
            onDismiss: () => console.log('run on notification dismiss'),
          })
        }
      >
        informative notification
      </Button>

      <Button
        onClick={() =>
          notify({
            message: 'mensagem de sucesso',
            dismissTimeout: 2000,
            type: 'positive',
          })
        }
      >
        positive notification
      </Button>

      <Button
        onClick={() =>
          notify({
            type: 'alert',
            message: 'mensagem de alerta',
            action: <Button>click</Button>,
          })
        }
      >
        alert notification
      </Button>

      <Button onClick={() => notify({ message: 'mensagem de erro', type: 'error' })}>
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

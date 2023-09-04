import { Button, useNotification } from '@r7-jarvics/ui-base-components'
import { Link, Outlet } from 'react-router-dom'

export function App() {
  const notify = useNotification()

  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/voting">Voting Admin</Link>
          </li>
        </ul>
      </header>
      <Button onClick={() => notify({ message: 'hello', type: 'positive' })}>snackbar</Button>

      {/* Children routes will be rendered in <Outlet /> */}
      <Outlet />
    </>
  )
}

export default App

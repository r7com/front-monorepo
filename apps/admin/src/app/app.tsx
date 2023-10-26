import { Button } from '@r7/ui-base-components'

import { useNotification } from '@r7/ui-voting-components'

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
            <Link to="/voting">Voting</Link>
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

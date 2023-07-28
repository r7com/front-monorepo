import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Avatar, Button, Disclaimer, SvgIcon } from '@r7-front-monorepo/ui-components-admin'

const Voting = React.lazy(() => import('voting/Module'))

export function App() {
  return (
    <React.Suspense fallback={null}>
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

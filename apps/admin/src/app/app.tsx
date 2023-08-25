import { CardStatus } from '@r7-front-monorepo/ui-components-admin'
import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

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
      <CardStatus text="teste" variant="error" />
      <Routes>
        <Route path="/" element={<h1>Hello Dashboard</h1>} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </React.Suspense>
  )
}

export default App

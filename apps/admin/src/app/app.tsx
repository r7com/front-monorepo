import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { MyComponent } from '@r7-front-monorepo/ui-components-admin/react'
import '../style.css'

const Voting = React.lazy(() => import('voting/Module'))

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li className="bg-slate-300">
          <Link className="no-underline text-slate-700" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/voting">Voting</Link>
        </li>
      </ul>
      <div>
        <MyComponent first="Admin" last="Federation" />
      </div>
      <Routes>
        <Route path="/" element={<h1>Hello Dashboard</h1>} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </React.Suspense>
  )
}

export default App

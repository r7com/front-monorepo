import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Button, SvgIcon } from '@r7-front-monorepo/ui-components-admin'

const Voting = React.lazy(() => import('voting/Module'))

export function App() {
  const TESTE = 'teste'
  return (
    <React.Suspense fallback={null}>
      <header>
        <SvgIcon iconName="github" />
        <ul>
          <li className="bg-slate-300">
            <Link className="no-underline text-slate-700" to="/">
              <Button type="button">Home</Button>
            </Link>
          </li>

          <li>
            <Link to="/voting">
              <Button type="button">Voting</Button>
            </Link>
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

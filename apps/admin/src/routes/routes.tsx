import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import App from '../app/app'
const Voting = lazy(() => import('voting/Module'))

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/voting', element: <Voting /> }],
  },
])

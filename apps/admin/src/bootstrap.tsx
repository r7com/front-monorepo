import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { NotificationProvider } from '@r7-front-monorepo/ui-components-admin'
import App from './app/app'

import './style.css'

const Voting = lazy(() => import('voting/Module'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/voting', element: <Voting /> }],
  },
])

export const RootApp = (
  <StrictMode>
    <NotificationProvider>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </NotificationProvider>
  </StrictMode>
)

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(RootApp)

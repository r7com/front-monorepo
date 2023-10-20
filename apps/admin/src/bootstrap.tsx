import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { NotificationProvider } from '@r7/ui-voting-components'
import { routes } from './routes'

import './style.css'

export const RootApp = (
  <StrictMode>
    <NotificationProvider>
      <Suspense fallback={null}>
        <RouterProvider router={routes} />
      </Suspense>
    </NotificationProvider>
  </StrictMode>
)

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(RootApp)

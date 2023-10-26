import { FontSizeChanger, Audima, ContrastControl, AccessibilityBar } from '@r7/ui-article-delivery'

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
      <div className="px-xxxs mx-0 my-auto">
        <AccessibilityBar>
          <AccessibilityBar.List>
            <AccessibilityBar.Item>
              <Audima />
            </AccessibilityBar.Item>

            <AccessibilityBar.Item>
              <ContrastControl />
              <FontSizeChanger>
                <FontSizeChanger.Increase />
                <FontSizeChanger.Decrease />
              </FontSizeChanger>
            </AccessibilityBar.Item>
          </AccessibilityBar.List>
        </AccessibilityBar>
      </div>

      <article>
        <h1>sou um h1</h1>
        <p className="text-xxs">anderson</p>
        <p className="text-xs">anderson22</p>
        <span data-font-size-changer>positive</span>
        <p>anderson</p>
      </article>

      <a href="s">dsfd</a>
      {/* Children routes will be rendered in <Outlet /> */}
      <Outlet />
    </>
  )
}

export default App

import { Route, Routes, Link } from 'react-router-dom'
import { FooterMock } from './ui-footer-delivery/footer-mock'

export function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/footer">Footer Components</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route. <Link to="/footer">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/footer"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
              <br />
              <br />
              <FooterMock />
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  )
}

export default App

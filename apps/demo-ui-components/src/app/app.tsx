import { Route, Routes, Link } from 'react-router-dom'
import { UiFooterDelivery } from './routes/ui-footer-delivery'
import { UiArticleDelivery } from './routes/ui-article-delivery'

export function App() {
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation" className="mb-lg">
        <ul className="list-disc list-inside">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ui-footer-delivery">Footer Delivery</Link>
          </li>
          <li>
            <Link to="/ui-article-delivery">Ui Article Delivery</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/ui-footer-delivery" element={<UiFooterDelivery />} />
        <Route path="/ui-article-delivery" element={<UiArticleDelivery />} />
      </Routes>
      {/* END: routes */}
    </div>
  )
}

export default App

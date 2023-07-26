import { Tooltip } from '@r7-front-monorepo/ui-components-admin'
import '../style.css'

export function App() {
  return (
    <div>
      <h2 className="text-gray-600 text-lg">Welcome voting</h2>
      <div className="flex justify-center h-screen items-center">
        <Tooltip content={<Teste />} position="right">
          <button>anderson batists</button>
        </Tooltip>
      </div>
    </div>
  )
}

function Teste() {
  return (
    <div>
      <h1>asnjsda</h1>
      <p> anc odb dobdfs pfdns;l pfds pdf pfdsol xxzcxzs</p>
      <p> anc odb dobdfs pfdns;l pfds pdf pfdsol xxzcxzs</p>
    </div>
  )
}

export default App

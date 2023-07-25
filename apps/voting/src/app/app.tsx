import { Tooltip } from '@r7-front-monorepo/ui-components-admin'
import '../style.css'

export function App() {
  return (
    <div>
      <h2 className="text-gray-600 text-lg">Welcome voting</h2>
      <Tooltip content={<Teste />} position="left">
        <button>andi</button>
      </Tooltip>
    </div>
  )
}

function Teste() {
  return <div>ancxxzcxzs</div>
}

export default App

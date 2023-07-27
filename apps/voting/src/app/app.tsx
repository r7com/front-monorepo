import { Button, Tooltip } from '@r7-front-monorepo/ui-components-admin'
import '../style.css'

export function App() {
  return (
    <div>
      <h2 className="text-gray-600 text-lg">Welcome voting</h2>
      <div className="flex justify-center h-screen items-center">
        <Tooltip content={'batista da cpsta staa'} position="left" arrow>
          <Button size="default">anderson batists</Button>
        </Tooltip>
      </div>
    </div>
  )
}

export default App

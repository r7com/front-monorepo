import { Institucional } from '@r7-jarvics/ui-footer-delivery'
import { data } from '@r7-jarvics/ui-footer-delivery'
import { useId } from 'react'
import '../style.css'

export function App() {
  const id = useId()
  return (
    <div>
      <h2 className="text-gray-600 text-lg">Welcome voting</h2>
      <Institucional.Root>
        <Institucional.Content>
          <Institucional.Editorial editorialName="r7" />
          <Institucional.Copyright />
        </Institucional.Content>
        <Institucional.Line />
        <Institucional.List>
          <Institucional.Item>
            {data.map(({ url, name }, i) => (
              <Institucional.Link url={url} name={name} key={`${id}${i}`} />
            ))}
          </Institucional.Item>
        </Institucional.List>
      </Institucional.Root>
    </div>
  )
}

export default App

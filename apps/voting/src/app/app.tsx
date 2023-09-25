import { Institutional } from '@r7-jarvics/ui-footer-delivery'
import { data } from '@r7-jarvics/ui-footer-delivery'
import { useId } from 'react'
import '../style.css'

export function App() {
  const id = useId()
  return (
    <div>
      <h2 className="text-gray-600 text-lg">Welcome voting</h2>
      <Institutional.Root>
        <Institutional.Content>
          <Institutional.Wrapper>
            <Institutional.Logo />
            <Institutional.Editorial editorialName="r7" />
          </Institutional.Wrapper>
          <Institutional.Copyright />
        </Institutional.Content>
        <Institutional.Line />
        <Institutional.List>
          {data.map(({ url, name }, i) => (
            <Institutional.Item key={`${id}${i}`}>
              <Institutional.Link url={url} name={name} />
            </Institutional.Item>
          ))}
        </Institutional.List>
      </Institutional.Root>
    </div>
  )
}

export default App

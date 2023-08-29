import { render } from '@testing-library/react'
import { RootApp } from '../bootstrap'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(RootApp)
    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(RootApp)
    expect(getByText(/Hello Dashboard/)).toBeTruthy()
  })
})

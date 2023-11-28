import { render } from '@testing-library/react'

import UiCorinthians from './ui-corinthians'

describe('UiCorinthians', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCorinthians />)
    expect(baseElement).toBeTruthy()
  })
})

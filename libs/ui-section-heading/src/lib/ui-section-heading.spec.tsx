import { render } from '@testing-library/react'

import UiSectionHeading from './ui-section-heading'

describe('UiSectionHeading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSectionHeading />)
    expect(baseElement).toBeTruthy()
  })
})

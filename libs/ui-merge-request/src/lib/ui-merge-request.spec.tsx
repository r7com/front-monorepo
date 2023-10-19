import { render } from '@testing-library/react'

import UiMergeRequest from './ui-merge-request'

describe('UiMergeRequest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiMergeRequest />)
    expect(baseElement).toBeTruthy()
  })
})

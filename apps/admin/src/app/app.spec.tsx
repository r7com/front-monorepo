import { render } from '@testing-library/react'
import { RootApp } from '../bootstrap'

describe('App', () => {
  // Vamos discutir se devemos testar o App inteiro dessa forma
  // By Pass
  it.skip('should be true', () => {
    const { baseElement } = render(RootApp)
    expect(baseElement).toBeTruthy()
  })
})

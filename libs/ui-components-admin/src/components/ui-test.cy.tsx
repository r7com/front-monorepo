import UiTest, { UiTestProps } from './ui-test'

describe(UiTest.name, () => {
  let props: UiTestProps

  beforeEach(() => {
    props = {}
  })

  it('renders', () => {
    cy.mount(<UiTest {...props} />)
    cy.findByText(/Welcome to UiTest!/i)
    cy.matchImage()
  })
})

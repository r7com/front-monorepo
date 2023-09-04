import { InputField } from './input-field'

describe(InputField.name, () => {
  it('renders as input field', () => {
    cy.mount(<InputField name="field" label="Foo" />)
    cy.findByLabelText(/Foo/i).should('be.visible')
  })
})

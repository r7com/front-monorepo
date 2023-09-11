import { InputField } from './input-field'

describe(InputField.name, () => {
  it('should render as button', () => {
    cy.mount(<InputField name="foo" label="Foo" />)
    cy.findByLabelText(/Foo/i).should('be.visible')
  })
})

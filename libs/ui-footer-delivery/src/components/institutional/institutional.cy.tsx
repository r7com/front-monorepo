import { data } from '../../mocks/institutional'
import { Institutional } from './index'
const institucionalSelector = '[data-testid="institutional"]'

describe('Institutional Footer', () => {
  it('should render Institutional Footer', () => {
    cy.mount(
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
            <Institutional.Item key={i}>
              <Institutional.Link url={url} name={name} />
            </Institutional.Item>
          ))}
        </Institutional.List>
      </Institutional.Root>,
    )
    cy.viewport(1024, 768)
    cy.get(institucionalSelector).should('be.visible')
    cy.matchImage()
  })

  it('should render mobile Institutional Footer', () => {
    cy.mount(
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
          <Institutional.Item>
            <Institutional.Link
              url={'https://www.r7.com/termos-e-condicoes'}
              name={'Termos e Condições de Uso'}
            />
          </Institutional.Item>
        </Institutional.List>
      </Institutional.Root>,
    )
    cy.viewport(320, 480)
    cy.get(institucionalSelector).should('be.visible')
    cy.matchImage()
  })
})

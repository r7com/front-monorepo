import { data } from '../../mocks/institutional'
import { Institutional } from './index'

describe('Institutional Footer', () => {
  const currentYear = new Date().getFullYear()

  it('should render Institutional Footer', () => {
    cy.mount(
      <Institutional.Root>
        <Institutional.Content>
          <Institutional.Wrapper>
            <Institutional.Logo />
            <Institutional.Editorial editorialName="r7" />
          </Institutional.Wrapper>
          <Institutional.Copyright>
            Todos os direitos reservados - 2009-{currentYear} - Rádio e Televisão Record S.A
          </Institutional.Copyright>
        </Institutional.Content>

        <Institutional.List>
          {data.map(({ url, name }, i) => (
            <Institutional.Item key={i}>
              <Institutional.Link url={url} title={name}>
                {name}
              </Institutional.Link>
            </Institutional.Item>
          ))}
        </Institutional.List>
      </Institutional.Root>,
    )
    cy.viewport(1024, 768)
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
          <Institutional.Copyright>
            Todos os direitos reservados - 2009-{currentYear} - Rádio e Televisão Record S.A
          </Institutional.Copyright>
        </Institutional.Content>
        <Institutional.List>
          <Institutional.Item>
            <Institutional.Link
              url={'https://www.r7.com/termos-e-condicoes'}
              title={'Termos e Condições de Uso'}
            >
              Termos e Condições de Uso
            </Institutional.Link>
          </Institutional.Item>
        </Institutional.List>
      </Institutional.Root>,
    )
    cy.viewport(320, 480)
    cy.matchImage()
  })

  it('should render structure Institutional Footer', () => {
    cy.mount(
      <Institutional.List>
        <Institutional.Item>
          <Institutional.Link
            url={'https://www.r7.com/termos-e-condicoes'}
            title={'Termos e Condições de Uso'}
          >
            Termos e Condições de Uso
          </Institutional.Link>
        </Institutional.Item>
      </Institutional.List>,
    )

    cy.findByRole('list').within(() => {
      cy.findByRole('listitem').within(() => {
        cy.findByRole('link', { name: /Termos e Condições de Uso/i })
      })
    })
  })
})

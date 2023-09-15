import { Banner } from './'
import { Button } from '../button'
import { SvgIcon } from '../svg-icon'

const bannerSelector = '[data-testid="banner-root"]'
const bannerCloseSelector = '[aria-label="Fechar"]'

const AllVariants = (
  <div className="flex flex-col gap-nano p-nano">
    <Banner.Root isVisible={true} onClose={() => null}>
      <Banner.Content>
        <Banner.Icon type="informative" />

        <Banner.Description>
          O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos com
          sua compreensão.
        </Banner.Description>
      </Banner.Content>
    </Banner.Root>

    <Banner.Root isVisible={true} onClose={() => null}>
      <Banner.Content>
        <Banner.Icon type="custom">
          <SvgIcon iconName="record" />
        </Banner.Icon>

        <Banner.Description>
          Bem-vindo ao JARVICS, onde a inovação simplifica sua jornada! #JARVICS
        </Banner.Description>
      </Banner.Content>
    </Banner.Root>

    <Banner.Root isVisible={true}>
      <Banner.Content>
        <Banner.Icon type="custom">
          <SvgIcon iconName="record" />
        </Banner.Icon>

        <Banner.Description>Noticias</Banner.Description>

        <Banner.Options>
          <Button>CADASTRAR</Button>

          <Button color="ghost">Dispensar</Button>
        </Banner.Options>
      </Banner.Content>
    </Banner.Root>

    <Banner.Root isVisible={true}>
      <Banner.Content>
        <Banner.Image alt="Default image" />

        <Banner.Description>Cookies</Banner.Description>

        <Banner.Options>
          <Button>ACEITAR</Button>
        </Banner.Options>
      </Banner.Content>
    </Banner.Root>
  </div>
)
describe('Banner', () => {
  it('should match all composable banners on dark mode', () => {
    cy.mount(AllVariants)
    cy.matchImage()
  })

  it('should match all composable banners on light mode', () => {
    cy.mount(<div className="dark bg-neutral-low-400">{AllVariants}</div>)
    cy.matchImage()
  })

  it('should be visible when isVisible is true', () => {
    const onClose = cy.stub().as('callback')
    cy.mount(
      <Banner.Root isVisible={true} onClose={onClose}>
        <Banner.Content>
          <Banner.Icon type="informative" />

          <Banner.Description>
            O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos
            com sua compreensão.
          </Banner.Description>
        </Banner.Content>
      </Banner.Root>,
    )
    cy.get(bannerSelector).should('be.visible')
    cy.matchImage()
  })

  it('should not be rendered when isVisible is false', () => {
    cy.mount(<Banner.Root isVisible={false}>Banner oculto</Banner.Root>)
    cy.get(bannerSelector).should('not.exist')
    cy.matchImage()
  })

  it('should run onClose callback with false when isVisible is true', () => {
    const onClose = cy.stub().as('callback')
    cy.mount(
      <Banner.Root isVisible={true} onClose={onClose}>
        <Banner.Content>
          <Banner.Icon type="informative" />

          <Banner.Description>
            O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos
            com sua compreensão.
          </Banner.Description>
        </Banner.Content>
      </Banner.Root>,
    )
    cy.get(bannerCloseSelector).click()
    cy.get('@callback').should('have.been.calledWith', false)
  })
})

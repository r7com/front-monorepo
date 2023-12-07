import { ArticleHeader } from './article-header'
import { Heading, Subheading } from '@r7/ui-base-components'
import { Signature } from '../signature'
import { SocialShare } from '../social-share'

const ArticleHeaderDemo = (
  <div className="article-container article-w-full lg:article-w-2/3">
    <ArticleHeader>
      <ArticleHeader.Heading>
        <Heading>Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor.</Heading>
        <Subheading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at ultricies massa. Nulla
          in mattis nulla. Vivamus dapibus erat ut tincidunt porttitor.
        </Subheading>
      </ArticleHeader.Heading>
      <ArticleHeader.Topbar>
        <Signature>
          <Signature.Content>
            <Signature.Info
              author="Fulano"
              sectionName="Esportes"
              sectionUrl="https://esportes.r7.com"
            />
            <Signature.Date modified="2023-08-28T14:32:13.07Z" published="2023-06-29T15:12:23Z" />
          </Signature.Content>
        </Signature>
        <SocialShare>
          <SocialShare.List>
            <SocialShare.Item
              link={'https://esportes.r7.com'}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor."
              name="twitter"
            />
            <SocialShare.Item
              link={'https://esportes.r7.com'}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor."
              name="facebook"
            />
            <SocialShare.Item
              link={'https://esportes.r7.com'}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor."
              name="linkedin"
            />
            <SocialShare.Item
              link={'https://esportes.r7.com'}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor."
              name="whatsapp"
            />
            <SocialShare.Item
              link={'https://esportes.r7.com'}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor."
              name="googleNews"
            />
            <SocialShare.Item
              link={'https://esportes.r7.com'}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor."
              name="share"
            />
          </SocialShare.List>
        </SocialShare>
      </ArticleHeader.Topbar>
    </ArticleHeader>
  </div>
)

describe('Signature', () => {
  beforeEach(() => {
    cy.mount(ArticleHeaderDemo)
  })

  it('should render article header on desktop', () => {
    cy.viewport('macbook-11')
    cy.matchImage()
  })

  it('should render article header on mobile', () => {
    cy.viewport('iphone-se2')
    cy.matchImage()
  })
})

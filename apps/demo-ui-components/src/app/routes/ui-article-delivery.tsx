import '@r7/ui-article-delivery/css'
import {
  FontSizeControlIncrease,
  FontSizeControlDecrease,
  ContrastControl,
  AccessibilityBar,
  SocialShare,
  Signature,
  useArticleAction,
} from '@r7/ui-article-delivery'
import { Breadcrumb, ConditionalLink, Paragraph, Typography } from '@r7/ui-base-components'
import { MENU_DATA } from '../mocks/MENU_DATA'
import { CardCoupon } from '@r7/ui-card'
import { COUPON_DATA } from '../mocks/COUPON_DATA'

export function UiArticleDelivery() {
  const { fontSize } = useArticleAction()
  return (
    <article style={{ '--font-size': `${fontSize}` } as React.CSSProperties}>
      <div className="container flex flex-col gap-xxxs sm:gap-0 sm:flex-row sm:justify-between">
        <Signature>
          <Signature.Agency
            url="https://agenciaestado.com.br"
            name="Agência Estado - R7"
            imageUrl="https://img.r7.com/images/logo-agencia-estado-09012020093353497?dimensions=50x50"
          />
          <Signature.Content>
            <Signature.Info
              author="Agência Estado"
              color="#4766ac"
              sectionName="r7"
              sectionUrl="https://noticias.r7.com/agencia-estado"
            />
            <Signature.Date published="2023-06-29T15:12:23Z" modified="2023-08-28T14:32:13.07Z" />
          </Signature.Content>
        </Signature>
        <Paragraph>anderson</Paragraph>
        <AccessibilityBar>
          <AccessibilityBar.List>
            <AccessibilityBar.Item>
              <ContrastControl />
            </AccessibilityBar.Item>
            <AccessibilityBar.Item>
              <FontSizeControlIncrease />
            </AccessibilityBar.Item>
            <AccessibilityBar.Item>
              <FontSizeControlDecrease />
            </AccessibilityBar.Item>
          </AccessibilityBar.List>
        </AccessibilityBar>
        <SocialShare>
          <SocialShare.List>
            <SocialShare.Item
              name="facebook"
              link="https://esportes.r7.com"
              title="facebook"
              position="topo"
            />
            <SocialShare.Item
              name="linkedin"
              link="https://esportes.r7.com"
              title="linkedin"
              position="topo"
            />
            <SocialShare.Item
              name="twitter"
              link="https://esportes.r7.com"
              title="twitter"
              position="topo"
            />
            <SocialShare.Item
              name="whatsapp"
              link="https://esportes.r7.com"
              title="whatsapp"
              position="topo"
            />
            <SocialShare.Item
              name="googleNews"
              link="https://esportes.r7.com"
              title="google-news"
              position="topo"
            />
            <SocialShare.Item
              name="share"
              link="https://esportes.r7.com"
              title="share"
              position="topo"
            />
          </SocialShare.List>
        </SocialShare>
        <Breadcrumb>
          <Breadcrumb.List>
            {MENU_DATA.map(({ id, text, url, title }) => {
              const lastItem = MENU_DATA[MENU_DATA.length - 1].id === id
              return (
                <Breadcrumb.Item key={id}>
                  <ConditionalLink
                    href={url}
                    title={`Ir para a página de ${title}`}
                    aria-current={lastItem ? 'page' : 'false'}
                  >
                    {text}
                  </ConditionalLink>
                </Breadcrumb.Item>
              )
            })}
          </Breadcrumb.List>
        </Breadcrumb>
      </div>

      <CardCoupon>
        <Typography primaryTitle as="span">
          r7 Cupons
        </Typography>
        <CardCoupon.List>
          {COUPON_DATA.map(({ id, name, url, logo, best_offer_text, anchor_text }) => (
            <CardCoupon.Item key={id}>
              <ConditionalLink target="_blank" title={anchor_text} href={url} data-partner={name}>
                <CardCoupon.Content>
                  <CardCoupon.Image logo={logo} alt={anchor_text} />
                  <div>
                    <Typography className="uppercase" fontSize="little" color="neutralLow">
                      {name}
                    </Typography>
                    <Typography fontSize="xxxs" fontWeight="bold">
                      {best_offer_text}
                    </Typography>
                  </div>
                </CardCoupon.Content>
              </ConditionalLink>
            </CardCoupon.Item>
          ))}
        </CardCoupon.List>
      </CardCoupon>
    </article>
  )
}

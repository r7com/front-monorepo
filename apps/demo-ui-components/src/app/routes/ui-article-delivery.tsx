import {
  FontSizeControl,
  Audima,
  ContrastControl,
  AccessibilityBar,
  SocialShare,
  Signature,
} from '@r7/ui-article-delivery'

export function UiArticleDelivery() {
  return (
    <div>
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
      <p className="text-[calc(theme(fontSize.xxxs)_*_var(--font-size))]">anderson</p>
      <AccessibilityBar>
        <Audima />
        <AccessibilityBar.List>
          <AccessibilityBar.Item>
            <ContrastControl />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControl.Increase />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControl.Decrease />
          </AccessibilityBar.Item>
        </AccessibilityBar.List>
      </AccessibilityBar>
      <SocialShare>
        <SocialShare.List>
          <SocialShare.Item name="facebook" link="#facebook" title="facebook" />
          <SocialShare.Item name="linkedin" link="#linkedin" title="linkedin" />
          <SocialShare.Item name="twitter" link="#twitter" title="twitter" />
          <SocialShare.Item name="whatsapp" link="#whatsapp" title="whatsapp" />
          <SocialShare.Item name="googleNews" link="#googlenews" title="google-news" />
          <SocialShare.Item name="share" link="#share" title="share" />
        </SocialShare.List>
      </SocialShare>
    </div>
  )
}

import { Signature, SocialShare } from '@r7/ui-article-delivery'

export function UiArticleDelivery() {
  return (
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
      <SocialShare.List>
        <SocialShare.Item name="facebook" link="https://www.google.com" title="titulo" />
        <SocialShare.Item name="linkedin" link="https://www.google.com" title="titulo" />
        <SocialShare.Item name="twitter" link="https://www.google.com" title="titulo" />
        <SocialShare.Item name="whatsapp" link="https://www.google.com" title="titulo" />
        <SocialShare.Item name="googleNews" link="kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" title="titulo" />
        <SocialShare.Item name="share" link="kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" title="titulo" />
      </SocialShare.List>
    </div>
  )
}

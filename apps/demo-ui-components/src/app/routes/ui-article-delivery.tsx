import { Signature } from '@r7/ui-article-delivery'
import { FontSizeControl, Audima, ContrastControl, AccessibilityBar } from '@r7/ui-article-delivery'
import { Button } from '@r7/ui-base-components'

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
    </div>
  )
}

import '@r7/ui-layout/css'
import '@r7/ui-section-heading/css'
import '@r7/ui-section-foot/css'
import { Container } from '@r7/ui-layout'
import { SectionHeading } from '@r7/ui-section-heading'
import { SectionFoot } from '@r7/ui-section-foot'

export function UiSection() {
  return (
    <Container>
      <SectionHeading color="#F78714">
        <SectionHeading.Title>
          <a href="/">Entretenimento</a>
        </SectionHeading.Title>

        <SectionHeading.Line />
      </SectionHeading>

      <SectionFoot bg="#F78714">
        <SectionFoot.Line />

        <SectionFoot.Link href="https://www.r7.com/" title="Mais Entretenimento">
          Mais Entretenimento
        </SectionFoot.Link>
      </SectionFoot>

      <SectionHeading color="#4766ac">
        <a href="/">
          <SectionHeading.Image
            src="https://img.r7.com/images/jr-24h-18112019115830166?resize=110x70&crop=200x127+0+37"
            alt="Jornal da Record"
          />
        </a>

        <SectionHeading.Line />

        <SectionHeading.Tags>
          <SectionHeading.Tag href="#" title="Christina Lemos">
            Christina Lemos
          </SectionHeading.Tag>

          <SectionHeading.Tag href="#" title="Thiago Nolasco">
            Thiago Nolasco
          </SectionHeading.Tag>

          <SectionHeading.Tag href="#" title="Luiz Fara Monteiro">
            Luiz Fara Monteiro
          </SectionHeading.Tag>
        </SectionHeading.Tags>
      </SectionHeading>

      <SectionFoot bg="#4766ac">
        <SectionFoot.Line />

        <SectionFoot.Link href="https://www.r7.com/" title="Mais JR 24H">
          Mais JR 24H
        </SectionFoot.Link>
      </SectionFoot>
    </Container>
  )
}

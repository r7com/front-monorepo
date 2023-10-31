import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon } from '@r7/ui-base-components'

export function WhatsappIcon({ color, link }: SocialIconProps) {
  const { whatsappSlot } = variants({ color })

  return (
    <a href={`https://wa.me/?text=${link}`} title="Compartilhe no Whatsapp">
      <SvgIcon iconName="whatsapp" className={whatsappSlot()} title="whatsapp" />
    </a>
  )
}

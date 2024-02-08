import { onMediaShare, shareParams } from '../utils/sharer'
import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { IconButton, SvgIcon } from '@r7/ui-base-components'

export function WhatsappIcon({ color, link, position }: SocialIconProps) {
  const { whatsappSlot } = variants({ color })

  return (
    <IconButton
      onClick={() =>
        onMediaShare(
          `https://wa.me/?text=${shareParams({
            link,
            utm_source: 'whatsapp',
            utm_campaign: position,
          })}`,
        )
      }
      title="Compartilhe no Whatsapp"
    >
      <SvgIcon iconName="whatsapp" className={whatsappSlot()} title="whatsapp" />
    </IconButton>
  )
}

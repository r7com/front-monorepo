import { onMediaShare } from '../utils/sharer'
import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon, IconButton } from '@r7/ui-base-components'

export function FacebookIcon({ link, title, color }: SocialIconProps) {
  const { facebookSlot } = variants({ color })

  return (
    <IconButton
      onClick={() =>
        onMediaShare(`https://www.facebook.com/sharer/sharer.php?u=${link}&t=${title}`)
      }
      title="Compartilhar no Facebook"
    >
      <SvgIcon iconName="facebook" className={facebookSlot()} title="facebook" />
    </IconButton>
  )
}

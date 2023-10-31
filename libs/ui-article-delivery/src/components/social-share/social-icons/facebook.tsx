import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon } from '@r7/ui-base-components'

export function FacebookIcon({ link, title, color }: SocialIconProps) {
  const { facebookSlot } = variants({ color })

  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${link}&t=${title}`}
      title="Compartilhar no Facebook"
    >
      <SvgIcon iconName="facebook" className={facebookSlot()} title="facebook" />
    </a>
  )
}

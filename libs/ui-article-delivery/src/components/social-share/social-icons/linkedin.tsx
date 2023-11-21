import { onMediaShare } from '../utils/sharer'
import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon, IconButton } from '@r7/ui-base-components'

export function LinkedinIcon({ color, link }: SocialIconProps) {
  const { linkedinSlot } = variants({ color })

  return (
    <IconButton
      onClick={() => onMediaShare(`https://www.linkedin.com/sharing/share-offsite/?url=${link}`)}
      title="Compartilhe no Linkedin"
    >
      <SvgIcon iconName="linkedin" className={linkedinSlot()} title="linkedin" />
    </IconButton>
  )
}

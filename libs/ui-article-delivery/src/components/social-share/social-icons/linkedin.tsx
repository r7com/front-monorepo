import { onMediaShare, shareParams } from '../utils/sharer'
import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon, IconButton } from '@r7/ui-base-components'

export function LinkedinIcon({ color, link, position }: SocialIconProps) {
  const { linkedinSlot } = variants({ color })

  return (
    <IconButton
      onClick={() =>
        onMediaShare(
          `https://www.linkedin.com/sharing/share-offsite/?url=${shareParams({
            link,
            utm_source: 'linkedin',
            utm_campaign: position,
          })}`,
        )
      }
      title="Compartilhe no Linkedin"
    >
      <SvgIcon iconName="linkedin" className={linkedinSlot()} title="linkedin" />
    </IconButton>
  )
}

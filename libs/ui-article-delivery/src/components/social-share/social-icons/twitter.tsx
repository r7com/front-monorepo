import { onMediaShare } from '../utils/sharer'
import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { IconButton, SvgIcon } from '@r7/ui-base-components'

export function TwitterIcon({ color, link, title }: SocialIconProps) {
  const { twitterSlot } = variants({ color })

  return (
    <IconButton
      onClick={() =>
        onMediaShare(`https://twitter.com/share?url=${link}&text=${title}&hashtag=R7&via=portalr7`)
      }
      title="Compartilhe no Twitter"
    >
      <SvgIcon iconName="twitter" className={twitterSlot()} title="twitter" />
    </IconButton>
  )
}

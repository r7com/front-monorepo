import { SocialIconVariants } from '../social-icons/social-icons.variants'
import { SocialItemVariants, variants } from './social-item.variants'
import { SocialIconProps } from '../social-icons/types'

import {
  FacebookIcon,
  GoogleNewsIcon,
  LinkedinIcon,
  ShareIcon,
  TwitterIcon,
  WhatsappIcon,
} from '../social-icons'

export type SocialItemProps = {
  name: 'facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'googleNews' | 'share'
} & SocialIconVariants &
  SocialItemVariants &
  SocialIconProps

export function SocialItem({
  color = 'primary',
  shape = 'square',
  name,
  link,
  title,
  position,
}: SocialItemProps) {
  const IconComponent = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    whatsapp: WhatsappIcon,
    googleNews: GoogleNewsIcon,
    share: ShareIcon,
  }[name]

  return (
    <li className={variants({ shape })}>
      <IconComponent color={color} link={link} title={title} position={position} />
    </li>
  )
}

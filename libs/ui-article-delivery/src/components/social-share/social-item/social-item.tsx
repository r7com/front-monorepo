import { SocialIconVariants } from '../social-icons/social-icons.variants'
import { SocialItemVariants, variants } from './social-item.variants'

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
  link?: string
  title?: string
} & SocialIconVariants &
  SocialItemVariants

export function SocialItem({
  color = 'primary',
  shape = 'square',
  name,
  link,
  title,
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
      <IconComponent color={color} link={link} title={title} />
    </li>
  )
}

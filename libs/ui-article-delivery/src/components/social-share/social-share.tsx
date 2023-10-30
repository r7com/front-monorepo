import { SocialItem } from './social-item/social-item'
import { SocialList } from './social-list/social-list'

export type SocialShareProps = {
  children: React.ReactNode
}

export function SocialShare({ children }: SocialShareProps) {
  return <div>{children}</div>
}

SocialShare.List = SocialList
SocialShare.Item = SocialItem

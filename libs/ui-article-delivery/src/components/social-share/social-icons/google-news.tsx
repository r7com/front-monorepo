import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon, SvgIcons, ConditionalLink } from '@r7/ui-base-components'

export function GoogleNewsIcon({ color = 'primary' }: SocialIconProps) {
  const { googleNewsSlot } = variants({})

  const icon: Record<typeof color, SvgIcons> = {
    primary: 'google-news',
    secondary: 'google-news-white',
  }

  return (
    <ConditionalLink
      download
      target="_blank"
      href="https://news.google.com/publications/CAAqBwgKMKqrkQswvPqlAw?ceid=BR:pt-419&oc=3&hl=pt-BR&gl=BR"
      title="Acesse o google news"
    >
      <SvgIcon iconName={icon[color]} className={googleNewsSlot()} title="google-news" />
    </ConditionalLink>
  )
}

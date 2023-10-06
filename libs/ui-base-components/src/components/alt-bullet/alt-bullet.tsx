import { SvgIcon } from '../svg-icon'
import { variants, AltBulletVariants } from './alt-bullet.variants'

export type AltBulletProps = {
  text: string
  url: string
} & AltBulletVariants

export function AltBullet({ text, url, size = 'medium' }: AltBulletProps) {
  const { link } = variants({ size })

  return (
    <a href={url} className={link()}>
      <SvgIcon iconName="bullet" className="fill-brand-primary-500 w-nano h-nano" />
      {text}
    </a>
  )
}

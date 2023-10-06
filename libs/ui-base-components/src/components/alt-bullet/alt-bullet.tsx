import { SvgIcon } from '../svg-icon'
import { variants, AltBulletVariants } from './alt-bullet.variants'

export type AltBulletProps = {
  text: string
  url: string
} & AltBulletVariants

export function AltBullet({ text, url, size = 'medium' }: AltBulletProps) {
  return (
    <a href={url} className={variants({ size })}>
      <SvgIcon iconName="bullet" className="fill-brand-primary-500 w-nano h-nano" />
      {text}
    </a>
  )
}

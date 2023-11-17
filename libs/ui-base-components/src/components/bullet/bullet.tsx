import { SvgIcon } from '../svg-icon'
import { variants, BulletVariants } from './bullet.variants'

export type BulletProps = {
  children: React.ReactNode
  url: string
} & BulletVariants

export function Bullet({ children, url, size = 'medium' }: BulletProps) {
  return (
    <a href={url} className={variants({ size })}>
      <SvgIcon iconName="bullet" className="base-fill-brand-primary-500 base-w-nano base-h-nano" />
      {children}
    </a>
  )
}

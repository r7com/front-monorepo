import { SvgIcon } from '../svg-icon'
import { variants, BulletVariants } from './bullet.variants'

export type BulletProps = {
  children: React.ReactNode
  url: string
} & BulletVariants

export function Bullet({ children, url, size = 'medium' }: BulletProps) {
  const { text, icon } = variants({ size })
  return (
    <a href={url} className={text()}>
      <SvgIcon iconName="bullet" className={icon()} />
      {children}
    </a>
  )
}

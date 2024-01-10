import { SvgIcon } from '../svg-icon'
import { variants, BulletVariants } from './bullet.variants'

export type BulletProps = {
  children: React.ReactNode
  url: string
} & BulletVariants

export function Bullet({ children, url, size = 'medium', color = 'neutralLow' }: BulletProps) {
  const { textSlot, iconSlot } = variants({ size, color })

  return (
    <a href={url} className={textSlot()}>
      <SvgIcon iconName="bullet" className={iconSlot()} />
      {children}
    </a>
  )
}

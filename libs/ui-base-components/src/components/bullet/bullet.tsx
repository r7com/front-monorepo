import { variants, BulletVariants } from './bullet.variants'

export type BulletProps = {
  text: string
} & BulletVariants

export function Bullet({ text, variant = 'waiting' }: BulletProps) {
  const { base, dotVariant, textVariant } = variants({ variant })

  return (
    <div data-testid="bullet" className={base()}>
      <span className={dotVariant()}></span>
      <p className={textVariant()}>{text}</p>
    </div>
  )
}

import { LeftPhotoItem } from './left-photo-item'
import { LeftPhotoFlex } from './left-photo-flex'
import { LeftPhotoFigure } from './left-photo-figure'
import { LeftPhotoTextWrapper } from './left-photo-text-wrapper'
import { LeftPhotoTitle } from './left-photo-title'
import { LeftPhotoVariants, variants } from './left-photo.variants'

export type LeftPhotoItemProps = { children: React.ReactNode }

export function LeftPhoto({
  children,
  gap = 'xxxs',
  gapMd = 'xxxs',
}: { children: React.ReactNode } & LeftPhotoVariants) {
  return (
    <div
      className={variants({
        gap,
        gapMd,
      })}
    >
      {children}
    </div>
  )
}

LeftPhoto.Item = LeftPhotoItem
LeftPhoto.Flex = LeftPhotoFlex
LeftPhoto.Figure = LeftPhotoFigure
LeftPhoto.TextWrapper = LeftPhotoTextWrapper
LeftPhoto.Title = LeftPhotoTitle

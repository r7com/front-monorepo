import {
  ProportionalPhotoTextWrapperVariants,
  variants,
} from './proportional-photo-text-wrapper-variants'

export function ProportionalPhotoTextWrapper({
  children,
  marginBottom,
}: { children: React.ReactNode } & ProportionalPhotoTextWrapperVariants) {
  return <div className={variants({ marginBottom })}>{children}</div>
}

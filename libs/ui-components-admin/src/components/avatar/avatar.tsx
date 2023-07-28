export type AvatarProps = {
  type?: 'default' | 'enumerator'
  sourceUrl?: string
  enumValue?: number
}

export function Avatar({ type = 'default', sourceUrl = '', enumValue = 1 }: AvatarProps) {
  const defaultImageFallback =
    sourceUrl || 'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=32x32'

  const avatarVariant = {
    default: (
      <picture className="flex w-xs h-xs bg-brand-primary-600 border-solid border-thin border-neutral-high-500 rounded-circular overflow-hidden">
        <img src={defaultImageFallback} alt="avatar" />
      </picture>
    ),
    enumerator: (
      <div className="flex w-xs h-xs bg-neutral-high-500 border-solid border-thin border-neutral-high-500 rounded-circular items-center justify-center text-brand-primary-500">
        +{enumValue}
      </div>
    ),
  }[type]

  return avatarVariant
}

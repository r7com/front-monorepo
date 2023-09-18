export type BannerImageProps = {
  alt: string
  sourceUrl?: string
}

export function BannerImage({
  alt,
  sourceUrl = 'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=160x80',
}: BannerImageProps) {
  return (
    <picture className="w-fit min-w-[100px] h-auto flex rounded-lg overflow-hidden">
      <img className="w-auto h-full" src={sourceUrl} alt={alt} />
    </picture>
  )
}

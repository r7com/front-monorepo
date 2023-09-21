export type BannerImageProps = {
  alt: string
  sourceUrl?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export function BannerImage({
  alt,
  sourceUrl = 'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=160x80',
  ...rest
}: BannerImageProps) {
  return (
    <picture className="min-w-[225px] max-h-[70px] flex justify-center items-center rounded-md overflow-hidden">
      <img className="w-full h-full object-cover" src={sourceUrl} alt={alt} {...rest} />
    </picture>
  )
}

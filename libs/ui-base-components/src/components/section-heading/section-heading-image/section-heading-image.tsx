export type SectionHeadingImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export function SectionHeadingImage({ alt, ...rest }: SectionHeadingImageProps) {
  return <img className="rounded-md w-[110px] min-w-[110px] h-[70px]" alt={alt} {...rest} />
}

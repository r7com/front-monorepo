export type SectionHeadingImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export function SectionHeadingImage({ alt, ...rest }: SectionHeadingImageProps) {
  return (
    <img
      className="sheading-rounded-md sheading-w-[110px] sheading-min-w-[110px] sheading-h-[70px]"
      alt={alt}
      {...rest}
    />
  )
}
